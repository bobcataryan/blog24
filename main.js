var menu_items=["Butter Chicken", "Cheese Burst Pizza", "Chicken Mc spicy burger", "Chicken Tandoori", "Paneer Makhani", "Veg Supreme Burger"]
function start(){
    document.getElementById("menu").innerHTML= menu_items;
}
function menu_show(){
        document.getElementById("menu").style.visibility="visible";
}
function add(){
to_add=document.getElementById("new_item").value;
menu_items.push(to_add);
start();
}