$(function () {
    $(".search_Table").DataTable({
        "responsive": true,
        "lengthChange": false,
         "autoWidth": false,
         "ordering": true,
         "info": false
    });
    $(".show_Table").DataTable({
        "responsive": false,
        "lengthChange": false,
         "autoWidth": false,
         "searching":false,
         "paging": false,
         "info": false
    });
});

const data = [
    {
        "id":"1",
        "RMANo": "RT18030005-1",
        "checkDate": "2018/3/21",
        "Owner":"HC58HP",
        "序號": "G160350035",
        "品名": "WG-EMC1600-U3",
        "幣別": "NTD",
        "費用": 0,
        "申請日": "2018/3/6",
        "申請人": "AX4550",
        "公司": "益網科技股份有限公司",
        "報修單類型":"RMA",
        "地區別":"Taiwan",
        "NewBarcode": "N",
        "箱號": 1,
        "重量": 1,
        "箱子尺寸": 1,
        
    },
    {
        "id":"2",
        "RMANo": "RT18040098-1",
        "checkDate": "2018/2/2",
        "Owner":"HC58HP",
        "序號": "G170775476",
        "品名": "WG-EMC1600-A1",
        "幣別": "NTD",
        "費用": 0,
        "申請日": "2018/2/9",
        "申請人": "AX4550",
        "公司": "益網科技股份有限公司",
        "報修單類型":"RMA",
        "地區別":"Taiwan",
        "NewBarcode": "N",
        "箱號": 1,
        "重量": 1,
        "箱子尺寸": 1,
    }
]

function init() {
    data.forEach((item) => {
        let htmlTemplate = ''
        htmlTemplate = `
        <tr data-id="${item.id}">
            <td><input type="checkbox" value="" class="js-check"></td>
            <td>${item.RMANo}</td>
            <td>${item.checkDate}</td>
            <td>${item.Owner}</td>
            <td>${item.序號}</td>
            <td>${item.品名}</td>
            <td>${item.幣別}:${item.費用}</td>
            <td>${item.申請日}</td>
            <td>${item.申請人}</td>
            <td>${item.公司}</td>
            <td>${item.報修單類型}</td>
            <td>${item.地區別}</td>
        </tr>
        `
        const tbody = document.querySelector('.js-list');
        tbody.innerHTML += htmlTemplate
        showItem(item)
    })
}
init()
function showItem(index) {
    const confirm = document.querySelector(".js-confirm")
    const checked = document.querySelectorAll(".js-check")
    confirm.addEventListener("click", () => {
        checked.forEach((item,index) => {
            if (item.checked == true) {
                console.log(data[index].RMANo);
                let htmlTemplate = ''
                htmlTemplate = `
                <tr>
                    <td><input type="checkbox" value="" id="defaultCheck1"></td>
                    <td>${data[index].RMANo}</td>
                    <td>${data[index].序號}</td>
                    <td>${data[index].品名}</td>
                    <td>${data[index].幣別}</td>
                    <td><input class="form-control form-control-sm" type="number" value="${data[index].費用}"></td>
                    <td><input class="form-control form-control-sm" type="text" value="${data[index].NewBarcode}"></td>
                    <td><input class="form-control form-control-sm" type="text" value="${data[index].箱號}"></td>
                    <td><input class="form-control form-control-sm" type="text" value="${data[index].重量}"></td>
                    <td><input class="form-control form-control-sm" type="text" value="${data[index].箱子尺寸}"></td>
                    <td>${data[index].申請人}</td>
                    <td><i class="fas fa-eye text-muted"></i><i class="fas fa-edit text-info"></i><i class="far fa-trash-alt text-danger"></i></td>
                </tr>
                `
                const tbody = document.querySelector('.js-tableList');
                tbody.innerHTML += htmlTemplate
            }
        })
    })
}
