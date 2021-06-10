let count = 0;

$(".submit").click(function() {
    let social = $(".social").val();
    let personality = $(".personality").val();
    if (social < 6 && personality === "nice") {
        $(".answer").append('<img src="https://www.smoking-meat.com/image-files/honey-barbecue-smoked-wings.jpg" height="300px" width="50px">' + "<p>" + "Since you are " + personality + ", and " + social + "/10 socially active, you are a Honey BBQ chicken wing!!" + "<p>").show();
    } else if (social > 5 && personality === "nice") {
        $(".answer").append('<img src="https://divascancook.com/wp-content/uploads/2019/07/IMG_5774.jpg" height="300px">' + "<p>" + "Since you are " + personality + ", and " + social + "/10 socially active, you are a BBQ chicken wing!!" + "</p>").show();
    } else if (social < 6 && personality === "mean") {
        $(".answer").append('<img src="https://www.dinneratthezoo.com/wp-content/uploads/2016/08/baked-buffalo-wings-11.jpg" height="400px">' + "<p>" + "Since you are " + personality + ", and " + social + "/10 socially active, you are a Buffalo chicken wing!!" + "</p>").show();
    } else if (social > 5 && personality === "mean") {
        $(".answer").append('<img src="https://i.ytimg.com/vi/u14WY-vPbL0/maxresdefault.jpg" height="300px">' + "<p>" + "Since you are " + personality + ", and " + social + "/10 socially active, you are a ghost pepper chicken wing!!" + "</p>").show();
    }
    count = count + 1;
    $(".count").text(count);
});