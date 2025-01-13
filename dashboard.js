let orderList = [];
let totalPrice = 0;

// Daftar menu dan harga
const menuItems = {
    "Paket 1": 10000,
    "Paket 2": 11000,
    "Paket 3": 13000,
    "Paket 4": 14000,
    "Dada": 10000,
    "Paha": 8500,
    "Sayap": 8500,
    "Nasi": 3000,
    "Es Teh": 2000
};

function addOrder() {
    const menuItem = prompt("Masukkan nama menu (contoh: Paket 1, Paha, Es Teh):");
    if (menuItems[menuItem]) {
        const itemPrice = menuItems[menuItem];
        orderList.push({ item: menuItem, price: itemPrice });
        updateOrderList();
    } else {
        alert("Menu tidak ditemukan. Harap masukkan nama menu yang tersedia.");
    }
}

function updateOrderList() {
    const orderListElement = document.getElementById("orderList");
    const totalElement = document.getElementById("totalPrice");
    orderListElement.innerHTML = "";
    totalPrice = 0;

    orderList.forEach(order => {
        const listItem = document.createElement("li");
        listItem.textContent = `${order.item} - Rp ${order.price}`;
        orderListElement.appendChild(listItem);
        totalPrice += order.price;
    });

    totalElement.textContent = totalPrice;
}

function removeItem() {
    if (orderList.length > 0) {
        orderList.pop();
        updateOrderList();
    } else {
        alert("Pesanan kosong, tidak ada item untuk dihapus.");
    }
}

function checkout() {
    if (orderList.length > 0) {
        // Ambil nilai metode pembayaran dari dropdown
        const paymentMethod = document.getElementById("paymentMethod").value;

        if (paymentMethod) {
            alert(`Total pesanan Anda: Rp ${totalPrice}\nMetode Pembayaran: ${paymentMethod}`);
            orderList = [];
            updateOrderList();
        } else {
            alert("Pilih metode pembayaran terlebih dahulu.");
        }
    } else {
        alert("Pesanan Anda kosong. Tambahkan menu terlebih dahulu.");
    }
}
