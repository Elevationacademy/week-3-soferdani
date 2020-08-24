// setTimeout (function(){
// let person = "finally i meet you"
// console.log(person)

// },1000)

// console.log(person)

// let person = {name: "Kyle", age: 37}
// let expectedYearsLeft = 120 - person.age

// console.log(`${person.name} has ${expectedYearsLeft} years to live`) //prints Kyle has 83 years to live

// let person 
// setTimeout(() => {
//     person = {name:"dani", aga: 211}
//     let justSomeInfo = 12231 - person.aga
//     console.log(justSomeInfo)
// }, 1000 );

// $.get("https://www.google.com", function (reslot){
//     console.log(reslot)
// })

// let xhr = new XMLHttpRequest()
// xhr.open('get',"https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521")
// xhr.onreadystatechange = function (){
//     if (xhr.statu === OK) {
//         console.log(xhr.responseText)
//     } else {
//         console.log(`Error: ${xhr.status}`)
//     }
// }




// $.get("https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521", function(result){
//     console.log(result)
// })

// $.get("https://www.googleapis.com/books/v1/volumes?q=title:NameoftheWind", function (res){
//     console.log(res)
//     let temp = res.items[0].volumeInfo.title
//     console.log(temp)
// })

// $.get("https://jsonplaceholder.typicode.com/users",function (res) {
//     let positionOfLast = (res.length)-1
//     let toPrint = res[positionOfLast].company.catchPhrase
//     console.log(toPrint)
//     //res = res[0].email
//     console.log(res)
// })

let sucFunc = function (){
    console.log("this is working")
}

let errFunc = function (){
    console.log("problemmm")
}

//save is to exe 5

// $("#superBtn").on("click",function(isbn){
//     let url = "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521"
    
//     $.ajax({
//         method:"GET",
//         url: function(){

//         },
//         success: function(data){
//             console.log(data)
//         },
//         error: function (xhr,text,error) {
//             console.log(text)
//         }

//     })
// })


//exe1 + exe2 + exe3
 const fetch = function (queryType, queryValue) {
   
   const queryChacker = function (type,val) {
        if(type === "isbn") {
            return (`https://www.googleapis.com/books/v1/volumes?q=isbn:${val}`)
        } else if (type === "title") {
            return (`https://www.googleapis.com/books/v1/volumes?q=title:${val}`)
        }

   }
   
   
    $.ajax({
        method: "GET",
        url: queryChacker(queryType,queryValue),
        success: (data) => {
            let title = data.items[0]["volumeInfo"].title
            let aouther = data.items[0]["volumeInfo"].authors[0]
            let iban = data.items[0]["volumeInfo"].industryIdentifiers[0].identifier
            console.log(`title: ${title}, aouther: ${aouther}, iban number: ${iban}`)
        },
        error: (xhr,text,error) => {console.log(text)}
    })
 }

// // fetch(9782806269171)
// // fetch(1440633908 )
// // fetch(9781945048470  )
// // fetch(9780307417138  )
// fetch("isbn", 9789814561778)
// fetch("title", "How to Win Friends and Influence People")


//exe4 

//javascript, jQuery

// $.ajax({
//     method: "GET",
//     url:"http://api.giphy.com/v1/gifs/search?q=cat&api_key=Zj5YljZu6Kk6K6iqjuUC3PCOEAP4Uyen&limit=5",
//     success: (data) => {
//         let urlToPass = data["data"][0].embed_url
//         //createGifInDom(urlToPass)
//         //console.log(urlToPass)
//     },
//     error: (xhr,text,error) => {console.log(text)}
// })





$("#superBtn").on("click", function() {
    let search = $("#theSearch").val()
    $("#theSearch").val("")
    $.ajax({
        method: "GET",
        url:`http://api.giphy.com/v1/gifs/search?q=${search}t&api_key=Zj5YljZu6Kk6K6iqjuUC3PCOEAP4Uyen&limit=5`,
        success: (data) => {
            let urlToPass = data["data"][0].embed_url
            createGifInDom(urlToPass)
            //console.log(urlToPass)
        },
        error: (xhr,text,error) => {console.log(text)}
    })

})

const createGifInDom = function (url){
    $("body").append(`<iframe src="${url}"></iframe>`)
}