document.addEventListener("DOMContentLoaded", () => {
    const flexboxContainer = document.querySelector(".flexbox-container");
    let activeFlexbox = null;

    function createFlexbox(color) {
        const newFlexbox = document.createElement("div");
        newFlexbox.classList.add("flexbox");
        newFlexbox.style.position = "absolute";
        newFlexbox.style.top = "-500px";
        newFlexbox.style.width = "450px";
        newFlexbox.style.height = "450px";
        newFlexbox.style.borderRadius = "10px";
        newFlexbox.style.border = `12px solid ${color}`; 
        newFlexbox.style.backgroundColor = color; 
        newFlexbox.style.opacity = "1"; 
        newFlexbox.style.transition = `
            top 0.8s ease-in-out, 
            opacity 0.5s ease-in-out 0.3s, 
            background-color 0.8s ease-in-out
        `;

        flexboxContainer.appendChild(newFlexbox);
        flexboxContainer.style.display = "flex";

        setTimeout(() => {
            newFlexbox.style.top = "0"; 
        }, 10);

        setTimeout(() => {
            newFlexbox.style.backgroundColor = "transparent"; 
        }, 500); 

        if (activeFlexbox) {
            const oldFlexbox = activeFlexbox;
            oldFlexbox.style.transition = `
                top 0.8s ease-in-out, 
                opacity 0.5s ease-in-out
            `;
            oldFlexbox.style.top = "-800px"; 
            oldFlexbox.style.opacity = "0"; 

            setTimeout(() => {
                oldFlexbox.remove(); 
            }, 800);
        }

        activeFlexbox = newFlexbox;
    }

    function changeColor(day) {
        const colors = {
            monday: "#fa9ec4",
            tuesday: "#ff9a68",
            wednesday: "#fff176",
            thursday: "#cdfb7e",
            friday: "#bedeff",
            saturday: "#f7beff",
            sunday: "#d89efc",
        };

        if (colors[day]) {
            createFlexbox(colors[day]);
        }
    }

    window.changeColor = changeColor;
});
