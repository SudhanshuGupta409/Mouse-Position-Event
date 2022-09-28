const containerEl = document.querySelector(".container");

window.addEventListener("mousemove", (event)=>{
    containerEl.innerHTML = `<div class="mouseEvent">
    ${event.clientX}
    <h4>Mouse X Posotion(px)</h4>
</div>
<div class="mouseEvent">
    ${event.clientY}
    <h4>Mouse Y Posotion(px)</h4>
</div>`;
})