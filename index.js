document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

    let dom = document.getElementById('DOM');
    if (dom) {
        console.log("DOM element found");

        let domStyle = dom.style;
        domStyle.width = '70%';
        domStyle.height = '100px';
        domStyle.backgroundColor = 'yellow';
        domStyle.margin='20px';
        domStyle.padding='10px';
        domStyle.fontSize='18px';
        domStyle.fontWeight='bold';
        domStyle.height = '200px';
        domStyle.width = '300px';
        domStyle.border = '2px solid red'; // Add a border to make it visible
    } else {
        console.log("DOM element not found");
    }
});
