/*parallax background*/


new universalParallax().init({
    speed: 4
});



var countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua & Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Ascension",
  "Australia",
  "Australian bases in Antarctica",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burma (Myanmar)",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Caribbean Netherlands",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China (PRC)",
  "Colombia",
  "Comoros",
  "Congo (Brazzaville)",
  "Cook Islands",
  "Costa Rica",
  "Cote d’Ivoire (Ivory Coast)",
  "Croatia",
  "Cuba",
  "Curacao",
  "Cyprus",
  "Czech Republic",
  "Dem. Rep. Congo",
  "Denmark",
  "Diego Garcia",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "DPR Korea (North)", 
  "East Timor",
  "Ecuador", 
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia", 
  "Ethiopia",
  "F.S. Micronesia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "Gabon",
  "Gambia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guiana (French)",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia", 
  "Iran",
  "Iraq",
  "Ireland",
  "Israel", 
  "Italy",
  "Jamaica",
  "Japan", 
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (South)",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon", 
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Rep. of Georgia",
  "Republic of Macedonia",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Helena",
  "Saint Kitts & Nevis",
  "Saint Lucia",
  "Saint Vincent & the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia ",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten",
  "Slovakia",
  "Slovenia",
  "Solomon Islands", 
  "Somalia ",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "St Pierre & Miquelon",
  "Sudan",
  "Suriname", 
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand", 
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad & Tobago",
  "Tristan da Cunha",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks & Caicos",
  "Tuvalu", 
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "US Virgin Islands",
  "USA and Canada",
  "Uzbekistan",
  "Vanuatu ",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Wallis and Futuna",
  "Yemen", 
  "Zambia",
  "Zimbabwe"
]; 
var codes = [
  "+93",
  "+355",
  "+213",
  "+1(684)",
  "+376",
  "+244",
  "+1(264)",
  "+1(268)",
  "+54",
  "+374",
  "+297",
  "+247",
  "+61",
  "+672-1",
  "+43",
  "+994",
  "+1(242)",
  "+973",
  "+880",
  "+1(246)",
  "+375",
  "+32",
  "+501",
  "+229",
  "+1(441)",
  "+975",
  "+591",
  "+387",
  "+267",
  "+55",
  "+1(284)",
  "+673",
  "+359",
  "+226",
  "+95",
  "+257",
  "+855",
  "+237",
  "+238",
  "+599",
  "+1(345)",
  "+236",
  "+235",
  "+56",
  "+86",
  "+57",
  "+269",
  "+242",
  "+682",
  "+506",
  "+225",
  "+385",
  "+53",
  "+599",
  "+357",
  "+420",
  "+243",
  "+45",
  "+246",
  "+253",
  "+1(767)",
  "+1(809)",
  "+850-191",
  "+670",
  "+593",
  "+20",
  "+503",
  "+240",
  "+291",
  "+372",
  "+251",
  "+691",
  "+500",
  "+298",
  "+679",
  "+358",
  "+33",
  "+689",
  "+241",
  "+220",
  "+49",
  "+233",
  "+350",
  "+30",
  "+299",
  "+1(473)",
  "+590",
  "+1(671)",
  "+502",
  "+594",
  "+224",
  "+245",
  "+592",
  "+509",
  "+504",
  "+852",
  "+36",
  "+354",
  "+91",
  "+62(8)",
  "+98",
  "+964",
  "+353",
  "+972-5",
  "+39",
  "+1(876)",
  "+81",
  "+962",
  "+7(6)",
  "+254",
  "+686",
  "+82",
  "+965",
  "+996",
  "+856(20)",
  "+371",
  "+961",
  "+266",
  "+231",
  "+218",
  "+423",
  "+370",
  "+352",
  "+853",
  "+261",
  "+265",
  "+60",
  "+960",
  "+223",
  "+356",
  "+692",
  "+596",
  "+222",
  "+230",
  "+262",
  "+52",
  "+373",
  "+377",
  "+976",
  "+382",
  "+1(664)",
  "+212",
  "+258",
  "+264",
  "+674",
  "+977",
  "+31",
  "+599",
  "+687",
  "+64",
  "+505",
  "+227",
  "+234",
  "+683",
  "+672-3",
  "+1(670)",
  "+47",
  "+968",
  "+92",
  "+680",
  "+970",
  "+507",
  "+675",
  "+595",
  "+51",
  "+63",
  "+48",
  "+351",
  "+974",
  "+995",
  "+389",
  "+262",
  "+40",
  "+7",
  "+250",
  "+290",
  "+1(869)",
  "+1(758)",
  "+1(784)",
  "+685",
  "+378",
  "+239",
  "+966-5",
  "+221",
  "+381",
  "+248",
  "+232",
  "+65",
  "+1(721)",
  "+421",
  "+386",
  "+677",
  "+252",
  "+27",
  "+211",
  "+34",
  "+94",
  "+508",
  "+249",
  "+597",
  "+268",
  "+46",
  "+41",
  "+963",
  "+886",
  "+992",
  "+255",
  "+66",
  "+228",
  "+690",
  "+676",
  "+1(868)",
  "+290",
  "+216",
  "+90",
  "+993",
  "+1(649)",
  "+688-90",
  "+256",
  "+380",
  "+971-5",
  "+44",
  "+598",
  "+1(340)",
  "+1",
  "+998",
  "+678",
  "+39-6-698",
  "+58",
  "+84",
  "+681",
  "+967",
  "+260",
  "+263"
];



var $select = $("#selectCountry");
countries.forEach(function (country, code) {
  
  $("<option>", { text: country, val: codes[code]}).appendTo($select);
  var elements = document.getElementsByClassName('phone-number');
}); 
/* codes.forEach(function (code){
   $("<option>", { text:code, val: code }).appendTo($select);
}) */
$select
  .on("change", function () {
    $select.toggleClass("is-value-selected", "" !== $select.val());
  })
  .trigger("change");

  
 $(function() {
  function maskPhone() {
    var countryPhone = $select.val();
    switch (countryPhone) {
      case "+93": 
          $("#code").mask("+93-##-###-####");
          break;
      case "+355": 
          $("#code").mask("+355(###)###-###");
          break;
      case "+213": 
          $("#code").mask("+213-##-###-####");
          break;
      case "+1(684)": 
          $("#code").mask("+1(684)###-####");
          break;
      case "+376": 
          $("#code").mask("+376-###-###");
          break;
      case "+244": 
          $("#code").mask("+244(###)###-###");
          break;
      case "+1(264)": 
          $("#code").mask("+1(264)###-####");
          break;
      case "+1(268)": 
          $("#code").mask("+1(268)###-####");
          break;
      case "+54": 
          $("#code").mask("+54(###)###-####");
          break;
      case "+374": 
          $("#code").mask("+374-##-###-###");
          break;
      case "+297": 
          $("#code").mask("+297-###-####");
          break;
      case "+247": 
          $("#code").mask("+247-####");
          break;
      case "+61": 
          $("#code").mask("+61-#-####-####");
          break;
      case "+672": 
          $("#code").mask("+672-1##-###");
          break;
      case "+43": 
          $("#code").mask("+43(###)###-####");
          break;
      case "+994": 
          $("#code").mask("+994-##-###-##-##");
          break;
      case "+1(242)": 
          $("#code").mask("+1(242)###-####");
          break;
      case "+973": 
          $("#code").mask("+973-####-####");
          break;
      case "+880": 
          $("#code").mask("+880-##-###-###");
          break;
      case "+1(246)": 
          $("#code").mask("+1(246)###-####");
          break;
      case "+375": 
          $("#code").mask("+375(##)###-##-##");
          break;
      case "+32": 
          $("#code").mask("+32(###)###-###");
          break;
      case "+501": 
          $("#code").mask("+501-###-####");
          break;
      case "+229": 
          $("#code").mask("+229-##-##-####");
          break;
      case "+1(441)": 
          $("#code").mask("+1(441)###-####");
          break;
      case "+975": 
          $("#code").mask("+975-#-###-###");
          break;
      case "+591": 
          $("#code").mask("+591-#-###-####");
          break;
      case "+387": 
          $("#code").mask("+387-##-#####");
          break;
      case "+267": 
          $("#code").mask("+267-##-###-###");
          break;
      case "+55": 
          $("#code").mask("+55-##-####-####");
          break;
      case "+1(284)": 
          $("#code").mask("+1(284)###-####");
          break;
      case "+673": 
          $("#code").mask("+673-###-####");
          break;
      case "+359": 
          $("#code").mask("+359(###)###-###");
          break;
      case "+226": 
          $("#code").mask("+226-##-##-####");
          break;
      case "+95": 
          $("#code").mask("+95-##-###-###");
          break;
      case "+257": 
          $("#code").mask("+257-##-##-####");
          break;
      case "+855": 
          $("#code").mask("+855-##-###-###");
          break;
      case "+237": 
          $("#code").mask("+237-####-####");
          break;
      case "+238": 
          $("#code").mask("+238(###)##-##");
          break;
      case "+599": 
          $("#code").mask("+599-###-####");
          break;
      case "+1(345)": 
          $("#code").mask("+1(345)###-####");
          break;
      case "+236": 
          $("#code").mask("+236-##-##-####");
          break;
      case "+235": 
          $("#code").mask("+235-##-##-##-##");
          break;
      case "+56": 
          $("#code").mask("+56-#-####-####");
          break;
      case "+86": 
          $("#code").mask("+86(###)####-####");
          break;
      case "+57": 
          $("#code").mask("+57(###)###-####");
          break;
      case "+269": 
          $("#code").mask("+269-##-#####");
          break;
      case "+242": 
          $("#code").mask("+242-##-###-####");
          break;
      case "+682": 
          $("#code").mask("+682-##-###");
          break;
      case "+506": 
          $("#code").mask("+506-####-####");
          break;
      case "+225": 
          $("#code").mask("+225-##-###-###");
          break;
      case "+385": 
          $("#code").mask("+385-##-###-###");
          break;
      case "+53": 
          $("#code").mask("+53-#-###-####");
          break;
      case "+599": 
          $("#code").mask("+599-###-####");
          break;
      case "+357": 
          $("#code").mask("+357-##-###-###");
          break;
      case "+420": 
          $("#code").mask("+420(###)###-###");
          break;
      case "+243": 
          $("#code").mask("+243(###)###-###");
          break;
      case "+45": 
          $("#code").mask("+45-##-##-##-##");
          break;
      case "+246": 
          $("#code").mask("+246-###-####");
          break;
      case "+253": 
          $("#code").mask("+253-##-##-##-##");
          break;
      case "+1(767)": 
          $("#code").mask("+1(767)###-####");
          break;
      case "+1(809)": 
          $("#code").mask("+1(809)###-####");
          break;
      case "+850-191": 
          $("#code").mask("+850-191-###-####");
          break;
      case "+670": 
          $("#code").mask("+670-###-####");
          break;
      case "+593": 
          $("#code").mask("+593-##-###-####");
          break;
      case "+20": 
          $("#code").mask("+20(###)###-####");
          break;
      case "+503": 
          $("#code").mask("+503-##-##-####");
          break;
      case "+240": 
          $("#code").mask("+240-##-###-####");
          break;
      case "+291": 
          $("#code").mask("+291-#-###-###");
          break;
      case "+372": 
          $("#code").mask("+372-####-####");
          break;
      case "+251": 
          $("#code").mask("+251-##-###-####");
          break;
      case "+691": 
          $("#code").mask("+691-###-####");
          break;
      case "+500": 
          $("#code").mask("+500-#####");
          break;
      case "+298": 
          $("#code").mask("+298-###-###");
          break;
      case "+679": 
          $("#code").mask("+679-##-#####");
          break;
      case "+358": 
          $("#code").mask("+358(###)###-##-##");
          break;
      case "+33": 
          $("#code").mask("+33(###)###-###");
          break;
      case "+689": 
          $("#code").mask("+689-##-##-##");
          break;
      case "+241": 
          $("#code").mask("+241-#-##-##-##");
          break;
      case "+220": 
          $("#code").mask("+220(###)##-##");
          break;
      case "+49": 
          $("#code").mask("+49(####)###-####");
          break;
      case "+233": 
          $("#code").mask("+233(###)###-###");
          break;
      case "+350": 
          $("#code").mask("+350-###-#####");
          break;
      case "+30": 
          $("#code").mask("+30(###)###-####");
          break;
      case "+299": 
          $("#code").mask("+299-##-##-##");
          break;
      case "+1(473)": 
          $("#code").mask("+1(473)###-####");
          break;
      case "+590": 
          $("#code").mask("+590(###)###-###");
          break;
      case "+1(671)": 
          $("#code").mask("+1(671)###-####");
          break;
      case "+502": 
          $("#code").mask("+502-#-###-####");
          break;
      case "+594": 
          $("#code").mask("+594-#####-####");
          break;
      case "+224": 
          $("#code").mask("+224-##-###-###");
          break;
      case "+245": 
          $("#code").mask("+245-#-######");
          break;
      case "+592": 
          $("#code").mask("+592-###-####");
          break;
      case "+509": 
          $("#code").mask("+509-##-##-####");
          break;
      case "+504": 
          $("#code").mask("+504-####-####");
          break;
      case "+852": 
          $("#code").mask("+852-####-####");
          break;
      case "+36": 
          $("#code").mask("+36(###)###-###");
          break;
      case "+354": 
          $("#code").mask("+354-###-####");
          break;
      case "+91": 
          $("#code").mask("+91(####)###-###");
          break;
      case "+62": 
          $("#code").mask("+62(###)###-####");
          break;
      case "+98": 
          $("#code").mask("+98(###)###-####");
          break;
      case "+964": 
          $("#code").mask("+964(###)###-####");
          break;
      case "+353": 
          $("#code").mask("+353(###)###-###");
          break;
      case "+972-5": 
          $("#code").mask("+972-5#-###-####");
          break;
      case "+39": 
          $("#code").mask("+39(###)####-###");
          break;
      case "+1(876)": 
          $("#code").mask("+1(876)###-####");
          break;
      case "+81": 
          $("#code").mask("+81-##-####-####");
          break;
      case "+962": 
          $("#code").mask("+962-#-####-####");
          break;
      case "+7": 
          $("#code").mask("+7(###)###-##-##");
          break;
      case "+254": 
          $("#code").mask("+254-###-######");
          break;
      case "+686": 
          $("#code").mask("+686-##-###");
          break;
      case "+82": 
          $("#code").mask("+82-##-###-####");
          break;
      case "+965": 
          $("#code").mask("+965-####-####");
          break;
      case "+996": 
          $("#code").mask("+996(###)###-###");
          break;
      case "+856": 
          $("#code").mask("+856(####)###-###");
          break;
      case "+371": 
          $("#code").mask("+371-##-###-###");
          break;
      case "+961": 
          $("#code").mask("+961-##-###-###");
          break;
      case "+266": 
          $("#code").mask("+266-#-###-####");
          break;
      case "+231": 
          $("#code").mask("+231-##-###-###");
          break;
      case "+218": 
          $("#code").mask("+218-##-###-###");
          break;
      case "+423": 
          $("#code").mask("+423(###)###-####");
          break;
      case "+370": 
          $("#code").mask("+370(###)##-###");
          break;
      case "+352": 
          $("#code").mask("+352(###)###-###");
          break;
      case "+853": 
          $("#code").mask("+853-####-####");
          break;
      case "+261": 
          $("#code").mask("+261-##-##-#####");
          break;
      case "+265": 
          $("#code").mask("+265-#-####-####");
          break;
      case "+60": 
          $("#code").mask("+60(###)###-###");
          break;
      case "+960": 
          $("#code").mask("+960-###-####");
          break;
      case "+223": 
          $("#code").mask("+223-##-##-####");
          break;
      case "+356": 
          $("#code").mask("+356-####-####");
          break;
      case "+692": 
          $("#code").mask("+692-###-####");
          break;
      case "+596": 
          $("#code").mask("+596(###)##-##-##");
          break;
      case "+222": 
          $("#code").mask("+222-##-##-####");
          break;
      case "+230": 
          $("#code").mask("+230-###-####");
          break;
      case "+262": 
          $("#code").mask("+262-#####-####");
          break;
      case "+52": 
          $("#code").mask("+52(###)###-####");
          break;
      case "+373": 
          $("#code").mask("+373-####-####");
          break;
      case "+377": 
          $("#code").mask("+377(###)###-###");
          break;
      case "+976": 
          $("#code").mask("+976-##-##-####");
          break;
      case "+382": 
          $("#code").mask("+382-##-###-###");
          break;
      case "+1(664)": 
          $("#code").mask("+1(664)###-####");
          break;
      case "+212": 
          $("#code").mask("+212-##-####-###");
          break;
      case "+258": 
          $("#code").mask("+258-##-###-###");
          break;
      case "+264": 
          $("#code").mask("+264-##-###-####");
          break;
      case "+674": 
          $("#code").mask("+674-###-####");
          break;
      case "+977": 
          $("#code").mask("+977-##-###-###");
          break;
      case "+31": 
          $("#code").mask("+31-##-###-####");
          break;
      case "+599": 
          $("#code").mask("+599-###-####");
          break;
      case "+687": 
          $("#code").mask("+687-##-####");
          break;
      case "+64": 
          $("#code").mask("+64(###)###-###");
          break;
      case "+505": 
          $("#code").mask("+505-####-####");
          break;
      case "+227": 
          $("#code").mask("+227-##-##-####");
          break;
      case "+234": 
          $("#code").mask("+234(###)###-####");
          break;
      case "+683": 
          $("#code").mask("+683-####");
          break;
      case "+672": 
          $("#code").mask("+672-3##-###");
          break;
      case "+1(670)": 
          $("#code").mask("+1(670)###-####");
          break;
      case "+47": 
          $("#code").mask("+47(###)##-###");
          break;
      case "+968": 
          $("#code").mask("+968-##-###-###");
          break;
      case "+92": 
          $("#code").mask("+92(###)###-####");
          break;
      case "+680": 
          $("#code").mask("+680-###-####");
          break;
      case "+970": 
          $("#code").mask("+970-##-###-####");
          break;
      case "+507": 
          $("#code").mask("+507-###-####");
          break;
      case "+675": 
          $("#code").mask("+675(###)##-###");
          break;
      case "+595": 
          $("#code").mask("+595(###)###-###");
          break;
      case "+51": 
          $("#code").mask("+51(###)###-###");
          break;
      case "+63": 
          $("#code").mask("+63(###)###-####");
          break;
      case "+48": 
          $("#code").mask("+48(###)###-###");
          break;
      case "+351": 
          $("#code").mask("+351-##-###-####");
          break;
      case "+974": 
          $("#code").mask("+974-####-####");
          break;
      case "+995": 
          $("#code").mask("+995(###)###-###");
          break;
      case "+389": 
          $("#code").mask("+389-##-###-###");
          break;
      case "+262": 
          $("#code").mask("+262-#####-####");
          break;
      case "+40": 
          $("#code").mask("+40-##-###-####");
          break;
      case "+7": 
          $("#code").mask("+7(###)###-##-##");
          break;
      case "+250": 
          $("#code").mask("+250(###)###-###");
          break;
      case "+290": 
          $("#code").mask("+290-####");
          break;
      case "+1(869)": 
          $("#code").mask("+1(869)###-####");
          break;
      case "+1(758)": 
          $("#code").mask("+1(758)###-####");
          break;
      case "+1(784)": 
          $("#code").mask("+1(784)###-####");
          break;
      case "+685": 
          $("#code").mask("+685-##-####");
          break;
      case "+378": 
          $("#code").mask("+378-####-######");
          break;
      case "+239": 
          $("#code").mask("+239-##-#####");
          break;
      case "+966-5": 
          $("#code").mask("+966-5-####-####");
          break;
      case "+221": 
          $("#code").mask("+221-##-###-####");
          break;
      case "+381": 
          $("#code").mask("+381-##-###-####");
          break;
      case "+248": 
          $("#code").mask("+248-#-###-###");
          break;
      case "+232": 
          $("#code").mask("+232-##-######");
          break;
      case "+65": 
          $("#code").mask("+65-####-####");
          break;
      case "+1(721)": 
          $("#code").mask("+1(721)###-####");
          break;
      case "+421": 
          $("#code").mask("+421(###)###-###");
          break;
      case "+386": 
          $("#code").mask("+386-##-###-###");
          break;
      case "+677": 
          $("#code").mask("+677-###-####");
          break;
      case "+252": 
          $("#code").mask("+252-#-###-###");
          break;
      case "+27": 
          $("#code").mask("+27-##-###-####");
          break;
      case "+211": 
          $("#code").mask("+211-##-###-####");
          break;
      case "+34": 
          $("#code").mask("+34(###)###-###");
          break;
      case "+94": 
          $("#code").mask("+94-##-###-####");
          break;
      case "+508": 
          $("#code").mask("+508-##-####");
          break;
      case "+249": 
          $("#code").mask("+249-##-###-####");
          break;
      case "+597": 
          $("#code").mask("+597-###-####");
          break;
      case "+268": 
          $("#code").mask("+268-##-##-####");
          break;
      case "+46": 
          $("#code").mask("+46-##-###-####");
          break;
      case "+41": 
          $("#code").mask("+41-##-###-####");
          break;
      case "+963": 
          $("#code").mask("+963-##-####-###");
          break;
      case "+886": 
          $("#code").mask("+886-####-####");
          break;
      case "+992": 
          $("#code").mask("+992-##-###-####");
          break;
      case "+255": 
          $("#code").mask("+255-##-###-####");
          break;
      case "+66": 
          $("#code").mask("+66-##-###-####");
          break;
      case "+228": 
          $("#code").mask("+228-##-###-###");
          break;
      case "+690": 
          $("#code").mask("+690-####");
          break;
      case "+676": 
          $("#code").mask("+676-#####");
          break;
      case "+1(868)": 
          $("#code").mask("+1(868)###-####");
          break;
      case "+290": 
          $("#code").mask("+290-####");
          break;
      case "+216": 
          $("#code").mask("+216-##-###-###");
          break;
      case "+90": 
          $("#code").mask("+90(###)###-####");
          break;
      case "+993": 
          $("#code").mask("+993-#-###-####");
          break;
      case "+1(649)": 
          $("#code").mask("+1(649)###-####");
          break;
      case "+688-90": 
          $("#code").mask("+688-90####");
          break;
      case "+256": 
          $("#code").mask("+256(###)###-###");
          break;
      case "+380": 
          $("#code").mask("+380(##)###-##-##");
          break;
      case "+971": 
          $("#code").mask("+971-5#-###-####");
          break;
      case "+44": 
          $("#code").mask("+44-##-####-####");
          break;
      case "+598": 
          $("#code").mask("+598-#-###-##-##");
          break;
      case "+1(340)": 
          $("#code").mask("+1(340)###-####");
          break;
      case "+1": 
          $("#code").mask("+1(###)###-####");
          break;
      case "+998": 
          $("#code").mask("+998-##-###-####");
          break;
      case "+678": 
          $("#code").mask("+678-##-#####");
          break;
      case "+39-6-698": 
          $("#code").mask("+39-6-698-#####");
          break;
      case "+58": 
          $("#code").mask("+58(###)###-####");
          break;
      case "+84": 
          $("#code").mask("+84(###)####-###");
          break;
      case "+681": 
          $("#code").mask("+681-##-####");
          break;
      case "+967": 
          $("#code").mask("+967-###-###-###");
          break;
      case "+260": 
          $("#code").mask("+260-##-###-####");
          break;
      case "+263": 
          $("#code").mask("+263-#-######");
          break;      
    }    
  }
  maskPhone();
  $select.change(function() {
    maskPhone();
  });
});

$(function(){
  $('#selectCountry').on('change',function(){
      $('#code').addClass('active-phone');
      $('#code').val(this.value);// changing the code textbox value by current country value
  });
});

/*scroll-animation*/

ScrollOut({
  targets: '.scroll-animate',
  once: true,
  onShown(el) {
      el.classList.add("new-animate");
  }
});



/*custom select*/

$(document).ready(function(){
  $('select').niceSelect();
});



/*validation*/




// document.querySelector('form').addEventListener('submit', e => {

  $(".sign-up-button").on('click', function() {
    // e.preventDefault();
    var pattern = /.+@.+\..+/i;
    var myEmail = $(".email-adress").val().trim();
    var passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,}$/;
    var myPass = $(".password").val().trim();
    var confirmPass = $(".confirm-password").val().trim();
    var myName = $(".first-name").val().trim();
    var mySurame = $(".second-name").val().trim();
    var myPhone = $(".phone-number").val().trim();

  
    if ($(".option:nth-child(1)").hasClass('selected')){
      $('.fill-country').fadeIn();
      setTimeout(() => {
        $('.fill-country').fadeOut();
      }, 4000)
    }

    if (myName == "") {
      $('#fill-name').fadeIn();
      $('#error-firstname').fadeOut();
      setTimeout(() => {
        $('#fill-name').fadeOut();
      }, 4000)
    } else if (myName.length < 2) {
      $('#error-firstname').fadeIn();
      $('#fill-name').fadeOut();
      setTimeout(() => {
        $('#error-firstname').fadeOut();
      }, 4000)
    }

    if (mySurame == "") {
      $('#fill-surname').fadeIn();
      $('#error-secondname').fadeOut();
      setTimeout(() => {
        $('#fill-surname').fadeOut();
      }, 4000)
    } else if (mySurame.length < 2) {
      $('#error-secondname').fadeIn();
      $('#fill-surname').fadeOut();
      setTimeout(() => {
        $('#error-secondname').fadeOut();
      }, 4000)
    }


    if (myEmail == "") {
      $('#fill-email').fadeIn();
      $('#error-email').fadeOut();
      setTimeout(() => {
        $('#fill-email').fadeOut();
      }, 4000)
    } else if (myEmail.search(pattern)) {
      $('#fill-email').fadeOut();
      $('#error-email').fadeIn();
      setTimeout(() => {
        $('#error-email').fadeOut();
      }, 4000)
    }

    if (myPhone.length < 5) {
      $('#fill-phone').fadeIn();
      setTimeout(() => {
        $('#fill-phone').fadeOut();
      }, 4000)
    } 

    if (myPass == "") {
      $('#error-pas-empty').fadeIn();
      $('#error-pas-incorrect').fadeOut();
      setTimeout(() => {
        $('#error-pas-empty').fadeOut();
      }, 4000)
    } else if (myPass.search(passPattern)) {
      $('#error-pas-empty').fadeOut();
      $('#error-pas-incorrect').fadeIn();
      setTimeout(() => {
        $('#error-pas-incorrect').fadeOut();
      }, 4000)
    }

    if (confirmPass == "") {
      $('#fill-confirmation').fadeIn();
      $('#error-pas-incorrect').fadeOut();
      setTimeout(() => {
        $('#fill-confirmation').fadeOut();
      }, 4000)
    } else if (confirmPass != myPass) {
      $('#fill-confirmation').fadeOut();
      $('#unmatch-pass').fadeIn();
      setTimeout(() => {
        $('#unmatch-pass').fadeOut();
      }, 4000)
    }

    if ($('.custom-checkbox').is(":checked")) {
      $('.error-checked').fadeOut('error-checked-fade');
    } else {
      $('.error-checked').fadeIn('error-checked-fade');
      setTimeout(() => {
        $('.error-checked').fadeOut('error-checked-fade');
      }, 4000)
    }
    
    
  });
// })


document.querySelector('#code').addEventListener('keydown', valid);

function valid(event) {
  if (event.key === 'Backspace') {
    event.preventDefault();
  }
}


