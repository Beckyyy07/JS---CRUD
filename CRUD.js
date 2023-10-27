
        // Array para armazenar os itens com quantidades
        let items = [];

        // Função para criar um novo item
        function createItem() {
            const newItemText = document.getElementById("item").value;
            const newQuantity = document.getElementById("quantity").value;
            const newPrice = document.getElementById("price").value;

            if (newItemText && newQuantity && newPrice) {
                items.push({ item: newItemText, quantity: newQuantity, price: newPrice });
                document.getElementById("item").value = "";
                document.getElementById("quantity").value = "";
                document.getElementById("price").value = "";
                displayItems();
            }
        }

        // Função para exibir os itens na tabela
        function displayItems() {
            const itemTableBody = document.getElementById("itemTableBody");
            itemTableBody.innerHTML = "";

            items.forEach((item, index) => {
                const row = itemTableBody.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                const cell3 = row.insertCell(2);
                const cell4 = row.insertCell(3); // Nova célula para os botões

                cell1.textContent = item.item;
                cell2.textContent = item.quantity;
                cell3.textContent = item.price;

                // Botões de edição e exclusão
                const editButton = document.createElement("button");
                editButton.textContent = "Editar";
                editButton.onclick = () => editItem(index);
                editButton.style.backgroundColor = "#FFC436";
                editButton.style.borderWidth = ".5px";
                editButton.style.borderRadius = "15px";
                editButton.style.margin = "5px";

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Excluir";
                deleteButton.style.backgroundColor = "#C70039";
                deleteButton.style.borderWidth = ".5px";
                deleteButton.style.borderRadius = "15px";
                deleteButton.style.margin = "5px";

                deleteButton.onclick = () => deleteItem(index);

                cell4.appendChild(editButton);
                cell4.appendChild(deleteButton);
            });
        }

        // Função para editar um item
        function editItem(index) {
            const itemToEdit = items[index];
            document.getElementById("item").value = itemToEdit.item;
            document.getElementById("quantity").value = itemToEdit.quantity;
            document.getElementById("price").value = itemToEdit.price;
            items.splice(index, 1);
            displayItems();
        }

        // Função para excluir um item
        function deleteItem(index) {
            items.splice(index, 1);
            displayItems();
        }

        // Inicializa a exibição dos itens
        displayItems();