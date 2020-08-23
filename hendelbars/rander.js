// const data12 = [
//     {item: "bread", price:"15",shuldShow:true},
//     {item: "board", price:"213",shuldShow:false},
//     {item: "THINKSDADASDSADSADASDASD", price:"1241412541",shuldShow:false}
// ]
// //---------Just regular template invocation
// const source = $("#post-template").html()
// const template = Handlebars.compile(source)




//     let newHTML = template({tes:data12})
//     $('.items').append(newHTML)


// var classData = {
//     classmates: [
//         {name: "That on gal", description: "Always has the ansswer", socialNetwork: true},
//         {name: "The weird dude", description: "Quick with a smile",socialNetwork:false},
//         {name: "Taylor", description: "Just Taylor",socialNetwork:false}
//     ]
// }

// const source = $("#dataClassHere").html()
// // console.log(source)
// const teamplate = Handlebars.compile(source)
// //console.log(teamplate(classData))  
// let newHtml = teamplate(classData)

// $("#appendHere").append(newHtml)

const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

const randerFirst = function () {
    const source = $("#first-template").html()
    const tamplete = Handlebars.compile(source)
    let newHTML = tamplete({animals})
    console.log(newHTML)
    $("body").append(newHTML)
}


const randerSecond = function () {
    const source = $("#second-template").html()
    const tampel = Handlebars.compile(source)
    let newHtl = tampel({languages})
    $("#appendHere").append(newHtl)
}

randerFirst()
randerSecond()