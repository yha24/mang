function selectFile(contentType, multiple) {
    return new Promise(resolve => {
        let input = document.createElement('input');
        input.type = 'file';
        input.multiple = multiple;
        input.accept = contentType;

        input.onchange = () => {
            let files = Array.from(input.files);
            if (multiple)
                resolve(files);
            else
                resolve(files[0]);
        };

        input.click();
    });


}
// Content wrapper element
let contentElement = document.getElementById("content");
async function tep() {
    let files = await selectFile("image/*", true);
    contentElement.innerHTML = files.map(file => `<img src="${URL.createObjectURL(file)}" style="width: 100px; height: 100px;">`).join('');
}