
    var arr = []; // to store all json's


fetch("https://api.nobelprize.org/v1/prize.json").then((res) => {
        res.json().then((data) => {
          var temp = "";

          for (var key in data.prizes) {
            if (data.prizes.hasOwnProperty(key)) {
              var val = data.prizes[key];
              arr.push(val);
            }
          }

          var selectedarray =  getValue();
        
        

        });
      });

      
      var dateDropdown = document.getElementById("date-dropdown");

      var currentYear = 2021;
      var earliestYear = 1908;
      
      while (currentYear >= earliestYear) {
        var dateOption = document.createElement("option");
        dateOption.text = currentYear;
        dateOption.value = currentYear;
        dateDropdown.add(dateOption);
        currentYear -= 1;
    }

function getValue(){

    var yearIn = document.getElementById("date-dropdown");
    var categoryIn = document.getElementById("category-dropdown");
    var selectedYear = yearIn.value;
    var selectedCategory = categoryIn.value;
    


    filterarray(selectedYear,selectedCategory);
    return [selectedYear,selectedCategory];

    
}
function filterarray( year,cat){
        var filterYr = [];

    if(year==="All Years"){
        filterYr = arr;
        
    }
    else{
        
        for(var key in arr){
              var a = arr[key];
              if(a.year==year )
                filterYr.push(a);
        }
        
    }
    console.log(filterYr[0].category);
    console.log(cat);
    if(cat!="All"){
        var catarray = [];
        

            for(var key in filterYr){
                  var a = filterYr[key];
                  console.log(a.category);
                  if(a.category==cat ){
                    console.log("from if");
                      catarray.push(a);
                  }
            }
        
        filterYr = catarray;

    }

    
    temp = "";
    
    document.getElementById("data").innerHTML = "";

      filterYr.forEach((element) => {
            temp += "<tr>";

            temp += "<td>" + element.category + "</td>";

            temp += "<td>" + element.year + "</td>";

            if (element.laureates) {
              for (var i = 0; i < element.laureates.length; i++) {
                var lau = element.laureates[i];

                temp += "<td>" + lau.firstname + " " + lau.surname + "</td>";
              }
              temp += "</tr>";
            }
          });

         document.getElementById("data").innerHTML = temp;
          
}