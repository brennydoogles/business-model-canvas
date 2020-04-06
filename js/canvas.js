const baseUrl = "http://localhost:8080/";
$(document).ready(function () {
    $("#dateField").text(moment().format("MMMM Do YYYY"));
    createCanvasList();
    $("#fileSelect").change(function(){
        let selectedOption = $(this).children("option:selected");
        let fileNameOfSelectedOption = selectedOption.attr("data-fileName");
        clearCanvas();
        fillInCanvas(fileNameOfSelectedOption);
    });
    fillInCanvas();
});

function createCanvasList() {
    $.getJSON(baseUrl + "canvases.json", function (json) {
        // console.log(json); // this will show the info it in firebug console
        $.each(json.canvases, function (key, value) {
            let option = $('<option></option>')
                .attr("data-fileName", value.fileName)
                .text(value.name);
            $("#fileSelect").append(option);
        });
    });
}

function clearCanvas(){
    $("#partnerList").empty();
    $("#activityList").empty();
    $("#resourceList").empty();
    $("#valuePropositionList").empty();
    $("#customerRelationshipList").empty();
    $("#channelList").empty();
    $("#customerSegmentList").empty();
    $("#costStructureList").empty();
    $("#revenueStreamList").empty();
}

function fillInCanvas(filename) {
    if(filename === undefined){
        filename = "sample.json";
    }
    $.getJSON(baseUrl + filename, function (json) {
        $("#createdByField").text(json.createdBy);
        $.each(json.keyPartners, function (key, value) {
            $("#partnerList").append("<li>" + value + "</li>")
        });
        $.each(json.keyActivities, function (key, value) {
            $("#activityList").append("<li>" + value + "</li>")
        });

        $.each(json.keyResources, function (key, value) {
            $("#resourceList").append("<li>" + value + "</li>")
        });
        $.each(json.valuePropositions, function (key, value) {
            $("#valuePropositionList").append("<li>" + value + "</li>")
        });
        $.each(json.customerRelationships, function (key, value) {
            $("#customerRelationshipList").append("<li>" + value + "</li>")
        });
        $.each(json.channels, function (key, value) {
            $("#channelList").append("<li>" + value + "</li>")
        });
        $.each(json.customerSegments, function (key, value) {
            $("#customerSegmentList").append("<li>" + value + "</li>")
        });
        $.each(json.costStructure, function (key, value) {
            $("#costStructureList").append("<li>" + value + "</li>")
        });
        $.each(json.revenueStreams, function (key, value) {
            $("#revenueStreamList").append("<li>" + value + "</li>")
        });
    });
}