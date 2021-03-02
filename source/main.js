//  Image replacer v0.1 //
var imgAttributeNames = ["src","data-image-src","data-src","srcset"];
var link = "https://i.redd.it/hg4g39728pc51.jpg";

for(var i = 0;i < imgAttributeNames.length;i++){
    $("img").attr(imgAttributeNames[i], "https://i.redd.it/hg4g39728pc51.jpg");
}

$("a").attr("href", "https://i.redd.it/hg4g39728pc51.jpg");
$("iframe").attr("src", "https://i.redd.it/hg4g39728pc51.jpg");