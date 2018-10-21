//Icon Variables
var greenIcon = '/green-mountaing.png';
var redIcon = '/red-mountaing.png';
var yellowIcon = '/yellow-mountaing.png';
var blueIcon = '/blue-mountaing.png';
var whiteIcon = '/white-mountaing.png';


function onRowClick(tableId,trClassName ,callback) {
    var table = document.getElementById(tableId),
    	rows = table.getElementsByClassName(trClassName);
    
        
    	for (i = 1; i < rows.length+1; i++) {
        	table.rows[i].onclick = function (row) {
            	return function () {
                	callback(row);
            	};
        	}(table.rows[i]);
    	}
	};
	
	function setButtonsAnnotation(campaignId,peakId,annIndex,sw) {
	    var x = document.getElementById('YES'+annIndex);
	    x.style.display = "none";
	    var y = document.getElementById('NO'+annIndex);
	    y.style.display = "none";
	   
	    
	    var myData= "campaignId="+campaignId+"&"+"peakId="+peakId;
	    
	    console.log("Ann INdex: "+annIndex);
	    //console.log(z);
	    var myUrl;
	    if(sw==0){
	    	myUrl = "/awtproject/annotation/reject/";
	    }
	    else {
	    	var z = document.getElementById('EDIT'+annIndex);
	 	    z.style.display = "block";	
	    	myUrl = "/awtproject/annotation/confirm/";
	    }
	    
	    callController(myUrl,myData);
	}
	
	
function callController(url,mdata){
	$.ajax({
		   type: 'GET',
		   url: url,
		   data: mdata,
		   dataType: 'text',
		   contentType: 'text',
		   success: function(response, textStatus, jqXHR) {
		     console.log(response);
		     if(response="success"){
		    	console.log("request sent Successfully!");
		     }
		     
		   },
		   error: function(jqXHR, textStatus, errorThrown){
		     alert(textStatus, errorThrown);
		     console.log(errorThrown);
		     console.log(jqXHR);
		  }
		});	
}	


function setAnnotation(peakId,annId){
	
	var updated_elevation = document.getElementById('updated_ann_elevation'+annId).value;
	var updated_name  = document.getElementById('updated_ann_name'+annId).value;
	/* Fill in the Modal Values from the hidden inputs value */
	document.getElementById('annotationField').value = updated_name;
	document.getElementById('elevationField').value = updated_elevation;
		
	document.getElementById('_peakId').value = peakId;
	document.getElementById('_annotationId').value = annId;
	
	
	var countries = new Array("Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia - Plurinational State of","Bonaire - Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo - the Democratic Republic of the","Cook Islands","Costa Rica","CÃ´te d'Ivoire","Croatia","Cuba","CuraÃ§ao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran - Islamic Republic of","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea - Democratic People's Republic of","Korea - Republic of","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia - the Former Yugoslav Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia - Federated States of","Moldova - Republic of","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine - State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","RÃ©union","Romania","Russian Federation","Rwanda","Saint BarthÃ©lemy","Saint Helena - Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan - Province of China","Tajikistan","Tanzania - United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela - Bolivarian Republic of","Viet Nam","Virgin Islands - British","Virgin Islands - U.S.","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe");
	    
	var options = '';

	for (var i = 0; i < countries.length; i++) {
	   options += '<option value="' + countries[i]+ '">' + countries[i] + '</option>';
	}
	$("#countries").html(options);
	
	// Get the modal
	var modal = document.getElementById('myModal');
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	// When the user clicks the button, open the modal 
	modal.style.display = "block";
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}

}

function saveLocalName(){
	if(document.getElementById('localName').value.length == 0){
		alert("Local name must not be empty!");
		document.getElementById('localName').focus();
		return;
	}
	
	var peakId= document.getElementById('_peakId').value;
	var annId= document.getElementById('_annotationId').value;
	
	var selectId = '#countries';
	var index = $(selectId+" option:selected").index();
	
	var acronyms = new Array("AF","AX","AL","DZ","AS","AD","AO","AI","AQ","AG","AR","AM","AW","AU","AT","AZ","BS","BH","BD","BB","BY","BE","BZ","BJ","BM","BT","BO","BQ","BA","BW","BV","BR","IO","BN","BG","BF","BI","KH","CM","CA","CV","KY","CF","TD","CL","CN","CX","CC","CO","KM","CG","CD","CK","CR","CI","HR","CU","CW","CY","CZ","DK","DJ","DM","DO","EC","EG","SV","GQ","ER","EE","ET","FK","FO","FJ","FI","FR","GF","PF","TF","GA","GM","GE","DE","GH","GI","GR","GL","GD","GP","GU","GT","GG","GN","GW","GY","HT","HM","VA","HN","HK","HU","IS","IN","ID","IR","IQ","IE","IM","IL","IT","JM","JP","JE","JO","KZ","KE","KI","KP","KR","KW","KG","LA","LV","LB","LS","LR","LY","LI","LT","LU","MO","MK","MG","MW","MY","MV","ML","MT","MH","MQ","MR","MU","YT","MX","FM","MD","MC","MN","ME","MS","MA","MZ","MM","NA","NR","NP","NL","NC","NZ","NI","NE","NG","NU","NF","MP","NO","OM","PK","PW","PS","PA","PG","PY","PE","PH","PN","PL","PT","PR","QA","RE","RO","RU","RW","BL","SH","KN","LC","MF","PM","VC","WS","SM","ST","SA","SN","RS","SC","SL","SG","SX","SK","SI","SB","SO","ZA","GS","SS","ES","LK","SD","SR","SJ","SZ","SE","CH","SY","TW","TJ","TZ","TH","TL","TG","TK","TO","TT","TN","TR","TM","TC","TV","UG","UA","AE","GB","US","UM","UY","UZ","VU","VE","VN","VG","VI","WF","EH","YE","ZM","ZW");
	var acronym = acronyms[index];
	var nameField = document.getElementById('localName').value;
	
	var url = "/awtproject/annotation/saveName/";
	var myData= "mKey="+acronym+"&"+"mValue="+nameField+"&"+"annotationId="+annId+"&"+"peakId="+peakId;
	
	callController(url,myData);
	
	
	document.getElementById('info-confirm-img').style.visibility = 'visible';
	document.getElementById('info-confirm-img').style.opacity = '1';
	setTimeout(function(){
		document.getElementById('info-confirm-img').style.visibility = 'hidden';
		document.getElementById('info-confirm-img').style.opacity = '0';
	}, 2000);
	document.getElementById('localName').value = "";
}


function saveAnnotation() {
	/*Fields from the Modal Form */
	var annId= document.getElementById('_annotationId').value;
	var annotationName = document.getElementById('annotationField').value;
	var elevation = document.getElementById('elevationField').value;
	
	/*Values of hidden inputs Set by the Controller */
	var updated_elevation = document.getElementById('updated_ann_elevation'+annId).value;
	var updated_name  = document.getElementById('updated_ann_name'+annId).value;
	
	if(updated_elevation!=null && updated_name!=null){
		if(elevation == "")
			{
			alert("Elevation must not be empty!");
			document.getElementById('elevationField').focus();
				return;
			}
		if(annotationName == "" ){
			alert("Name must not be empty!");
			document.getElementById('annotationField').focus()
			return;
			}
		if((annotationName==updated_name)&&(elevation==updated_elevation)){
			alert("At least one field must be changed!");
			return;
			}
	}
	
	var url = "/awtproject/annotation/updateAnnotation/";
	var myData= "annotationId="+annId+"&"+"annName="+annotationName+"&"+"elevation="+elevation;
	
	callController(url,myData);
	/* Update hidden Inputs with the new values from Modal Form */
	document.getElementById('updated_ann_elevation'+annId).value = elevation;
	document.getElementById('updated_ann_name'+annId).value = annotationName;
	/* Close the Modal */
	document.getElementById('myModal').style.display = "none";
}
