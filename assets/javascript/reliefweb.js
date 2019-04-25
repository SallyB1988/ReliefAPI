// ===== constants ==================================
// ===== Variables ====================================


window.onload = function() {
  let searchCriteria = getFormInput();
  getAPIdata(searchCriteria);
};

$("#clicked").on("click", function() {
  console.log("clicked");
  let searchCriteria = getFormInput();
  getAPIdata(searchCriteria);
});


const getFormInput = () => {
  let disasterType= $("#disaster-type").val()
  let disasterStatus = $("#status").val()
  let disasterCountry = $("#country").val()

 console.log(disasterType);
 console.log(disasterCountry);

 let searchParams = {
      limit : 10,
      profile: "full",
      filter : {
        operator: "AND",
        conditions : [
            {
              field: "country",
              value: disasterCountry
            },
            {
              field: "status",
              value: "past"
            },
            {
              field: "type",
              value: disasterType
            }	
        ]
      }
    
      }

      console.log(searchParams);
      return searchParams;

  };

/**
 * Makes Ajax call to trivia database API to gather information for questions.
 */

// using POST
const getAPIdata = searchObj => {
  console.log(searchObj);
  // queryURL = `https://api.reliefweb.int/v1/reports?appname=apidoc`;  // reports
  let queryURL = "https://api.reliefweb.int/v1/disasters";

  var settings = {
    async: true,
    crossDomain: true,
    url: queryURL,
    method: "POST",
    headers: {
      "Content-Type": "application/javascript"
    },
    data: JSON.stringify(searchObj)
  };

  $.ajax(settings).done(function(response) {
    console.log(response);
  });
};

