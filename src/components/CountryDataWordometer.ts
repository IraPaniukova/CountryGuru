import { IDataWorldometer } from "./IDataWorldometer";
// originaly it was a  .json file, but for some reason I couldn't import it, so I am parsing it here and exporting the result
const jsonString =`[{
   "Country": "India",
   "Population": "1,428,627,663",
   "Yearly": "0.81%",
   "Net": "11,454,490",
   "Density": "481",
   "Land Area": "2,973,190",
   "Migrants": "-486,136"
 },
 {
   "Country": "China",
   "Population": "1,425,671,352",
   "Yearly": "-0.02%",
   "Net": "-215,985",
   "Density": "152",
   "Land Area": "9,388,211",
   "Migrants": "-310,220"
 },
 {
   "Country": "United States",
   "Population": "339,996,563",
   "Yearly": "0.50%",
   "Net": "1,706,706",
   "Density": "37",
   "Land Area": "9,147,420",
   "Migrants": "999,700"
 },
 {
   "Country": "Indonesia",
   "Population": "277,534,122",
   "Yearly": "0.74%",
   "Net": "2,032,783",
   "Density": "153",
   "Land Area": "1,811,570",
   "Migrants": "-49,997"
 },
 {
   "Country": "Pakistan",
   "Population": "240,485,658",
   "Yearly": "1.98%",
   "Net": "4,660,796",
   "Density": "312",
   "Land Area": "770,880",
   "Migrants": "-165,988"
 },
 {
   "Country": "Nigeria",
   "Population": "223,804,632",
   "Yearly": "2.41%",
   "Net": "5,263,420",
   "Density": "246",
   "Land Area": "910,770",
   "Migrants": "-59,996"
 },
 {
   "Country": "Brazil",
   "Population": "216,422,446",
   "Yearly": "0.52%",
   "Net": "1,108,948",
   "Density": "26",
   "Land Area": "8,358,140",
   "Migrants": "6,000"
 },
 {
   "Country": "Bangladesh",
   "Population": "172,954,319",
   "Yearly": "1.03%",
   "Net": "1,767,947",
   "Density": "1,329",
   "Land Area": "130,170",
   "Migrants": "-309,977"
 },
 {
   "Country": "Russia",
   "Population": "144,444,359",
   "Yearly": "-0.19%",
   "Net": "-268,955",
   "Density": "9",
   "Land Area": "16,376,870",
   "Migrants": "-136,414"
 },
 {
   "Country": "Mexico",
   "Population": "128,455,567",
   "Yearly": "0.75%",
   "Net": "951,442",
   "Density": "66",
   "Land Area": "1,943,950",
   "Migrants": "-50,239"
 },
 {
   "Country": "Ethiopia",
   "Population": "126,527,060",
   "Yearly": "2.55%",
   "Net": "3,147,136",
   "Density": "127",
   "Land Area": "1,000,000",
   "Migrants": "-11,999"
 },
 {
   "Country": "Japan",
   "Population": "123,294,513",
   "Yearly": "-0.53%",
   "Net": "-657,179",
   "Density": "338",
   "Land Area": "364,555",
   "Migrants": "99,994"
 },
 {
   "Country": "Philippines",
   "Population": "117,337,368",
   "Yearly": "1.54%",
   "Net": "1,778,359",
   "Density": "394",
   "Land Area": "298,170",
   "Migrants": "-69,996"
 },
 {
   "Country": "Egypt",
   "Population": "112,716,598",
   "Yearly": "1.56%",
   "Net": "1,726,495",
   "Density": "113",
   "Land Area": "995,450",
   "Migrants": "-29,998"
 },
 {
   "Country": "DR Congo",
   "Population": "102,262,808",
   "Yearly": "3.29%",
   "Net": "3,252,596",
   "Density": "45",
   "Land Area": "2,267,050",
   "Migrants": "-14,999"
 },
 {
   "Country": "Vietnam",
   "Population": "98,858,950",
   "Yearly": "0.68%",
   "Net": "672,094",
   "Density": "319",
   "Land Area": "310,070",
   "Migrants": "-82,700"
 },
 {
   "Country": "Iran",
   "Population": "89,172,767",
   "Yearly": "0.70%",
   "Net": "622,197",
   "Density": "55",
   "Land Area": "1,628,550",
   "Migrants": "-39,998"
 },
 {
   "Country": "Turkey",
   "Population": "85,816,199",
   "Yearly": "0.56%",
   "Net": "474,958",
   "Density": "112",
   "Land Area": "769,630",
   "Migrants": "-318,067"
 },
 {
   "Country": "Germany",
   "Population": "83,294,633",
   "Yearly": "-0.09%",
   "Net": "-75,210",
   "Density": "239",
   "Land Area": "348,560",
   "Migrants": "155,751"
 },
 {
   "Country": "Thailand",
   "Population": "71,801,279",
   "Yearly": "0.15%",
   "Net": "104,249",
   "Density": "141",
   "Land Area": "510,890",
   "Migrants": "18,999"
 },
 {
   "Country": "United Kingdom",
   "Population": "67,736,802",
   "Yearly": "0.34%",
   "Net": "227,866",
   "Density": "280",
   "Land Area": "241,930",
   "Migrants": "165,790"
 },
 {
   "Country": "Tanzania",
   "Population": "67,438,106",
   "Yearly": "2.96%",
   "Net": "1,940,358",
   "Density": "76",
   "Land Area": "885,800",
   "Migrants": "-39,997"
 },
 {
   "Country": "France",
   "Population": "64,756,584",
   "Yearly": "0.20%",
   "Net": "129,956",
   "Density": "118",
   "Land Area": "547,557",
   "Migrants": "67,761"
 },
 {
   "Country": "South Africa",
   "Population": "60,414,495",
   "Yearly": "0.87%",
   "Net": "520,610",
   "Density": "50",
   "Land Area": "1,213,090",
   "Migrants": "58,496"
 },
 {
   "Country": "Italy",
   "Population": "58,870,762",
   "Yearly": "-0.28%",
   "Net": "-166,712",
   "Density": "200",
   "Land Area": "294,140",
   "Migrants": "58,496"
 },
 {
   "Country": "Kenya",
   "Population": "55,100,586",
   "Yearly": "1.99%",
   "Net": "1,073,099",
   "Density": "97",
   "Land Area": "569,140",
   "Migrants": "-10,000"
 },
 {
   "Country": "Myanmar",
   "Population": "54,577,997",
   "Yearly": "0.74%",
   "Net": "398,691",
   "Density": "84",
   "Land Area": "653,290",
   "Migrants": "-34,998"
 },
 {
   "Country": "Colombia",
   "Population": "52,085,168",
   "Yearly": "0.41%",
   "Net": "211,144",
   "Density": "47",
   "Land Area": "1,109,500",
   "Migrants": "-175,051"
 },
 {
   "Country": "South Korea",
   "Population": "51,784,059",
   "Yearly": "-0.06%",
   "Net": "-31,751",
   "Density": "533",
   "Land Area": "97,230",
   "Migrants": "29,998"
 },
 {
   "Country": "Uganda",
   "Population": "48,582,334",
   "Yearly": "2.82%",
   "Net": "1,332,749",
   "Density": "243",
   "Land Area": "199,810",
   "Migrants": "-126,181"
 },
 {
   "Country": "Sudan",
   "Population": "48,109,006",
   "Yearly": "2.63%",
   "Net": "1,234,802",
   "Density": "27",
   "Land Area": "1,765,048",
   "Migrants": "-9,999"
 },
 {
   "Country": "Spain",
   "Population": "47,519,628",
   "Yearly": "-0.08%",
   "Net": "-39,002",
   "Density": "95",
   "Land Area": "498,800",
   "Migrants": "39,998"
 },
 {
   "Country": "Argentina",
   "Population": "45,773,884",
   "Yearly": "0.58%",
   "Net": "263,566",
   "Density": "17",
   "Land Area": "2,736,690",
   "Migrants": "3,718"
 },
 {
   "Country": "Algeria",
   "Population": "45,606,480",
   "Yearly": "1.57%",
   "Net": "703,255",
   "Density": "19",
   "Land Area": "2,381,740",
   "Migrants": "-9,999"
 },
 {
   "Country": "Iraq",
   "Population": "45,504,560",
   "Yearly": "2.27%",
   "Net": "1,008,438",
   "Density": "105",
   "Land Area": "434,320",
   "Migrants": "-6,000"
 },
 {
   "Country": "Afghanistan",
   "Population": "42,239,854",
   "Yearly": "2.70%",
   "Net": "1,111,083",
   "Density": "65",
   "Land Area": "652,860",
   "Migrants": "-65,846"
 },
 {
   "Country": "Poland",
   "Population": "41,026,067",
   "Yearly": "2.93%",
   "Net": "1,168,922",
   "Density": "134",
   "Land Area": "306,230",
   "Migrants": "-910,475"
 },
 {
   "Country": "Canada",
   "Population": "38,781,291",
   "Yearly": "0.85%",
   "Net": "326,964",
   "Density": "4",
   "Land Area": "9,093,510",
   "Migrants": "249,746"
 },
 {
   "Country": "Morocco",
   "Population": "37,840,044",
   "Yearly": "1.02%",
   "Net": "382,073",
   "Density": "85",
   "Land Area": "446,300",
   "Migrants": "-39,998"
 },
 {
   "Country": "Saudi Arabia",
   "Population": "36,947,025",
   "Yearly": "1.48%",
   "Net": "538,205",
   "Density": "17",
   "Land Area": "2,149,690",
   "Migrants": "28,998"
 },
 {
   "Country": "Ukraine",
   "Population": "36,744,634",
   "Yearly": "-7.45%",
   "Net": "-2,957,105",
   "Density": "63",
   "Land Area": "579,320",
   "Migrants": "1,784,718"
 },
 {
   "Country": "Angola",
   "Population": "36,684,202",
   "Yearly": "3.08%",
   "Net": "1,095,215",
   "Density": "29",
   "Land Area": "1,246,700",
   "Migrants": "-1,000"
 },
 {
   "Country": "Uzbekistan",
   "Population": "35,163,944",
   "Yearly": "1.55%",
   "Net": "536,292",
   "Density": "83",
   "Land Area": "425,400",
   "Migrants": "-19,999"
 },
 {
   "Country": "Yemen",
   "Population": "34,449,825",
   "Yearly": "2.24%",
   "Net": "753,211",
   "Density": "65",
   "Land Area": "527,970",
   "Migrants": "-29,914"
 },
 {
   "Country": "Peru",
   "Population": "34,352,719",
   "Yearly": "0.89%",
   "Net": "303,131",
   "Density": "27",
   "Land Area": "1,280,000",
   "Migrants": "-61,442"
 },
 {
   "Country": "Malaysia",
   "Population": "34,308,525",
   "Yearly": "1.09%",
   "Net": "370,304",
   "Density": "104",
   "Land Area": "328,550",
   "Migrants": "48,997"
 },
 {
   "Country": "Ghana",
   "Population": "34,121,985",
   "Yearly": "1.93%",
   "Net": "646,115",
   "Density": "150",
   "Land Area": "227,540",
   "Migrants": "-9,999"
 },
 {
   "Country": "Mozambique",
   "Population": "33,897,354",
   "Yearly": "2.81%",
   "Net": "927,836",
   "Density": "43",
   "Land Area": "786,380",
   "Migrants": "-5,000"
 },
 {
   "Country": "Nepal",
   "Population": "30,896,590",
   "Yearly": "1.14%",
   "Net": "349,010",
   "Density": "216",
   "Land Area": "143,350",
   "Migrants": "-62,012"
 },
 {
   "Country": "Madagascar",
   "Population": "30,325,732",
   "Yearly": "2.41%",
   "Net": "714,018",
   "Density": "52",
   "Land Area": "581,795",
   "Migrants": "-1,500"
 },
 {
   "Country": "Côte d'Ivoire",
   "Population": "28,873,034",
   "Yearly": "2.53%",
   "Net": "712,492",
   "Density": "91",
   "Land Area": "318,000",
   "Migrants": "6,000"
 },
 {
   "Country": "Venezuela",
   "Population": "28,838,499",
   "Yearly": "1.90%",
   "Net": "536,803",
   "Density": "33",
   "Land Area": "882,050",
   "Migrants": "321,106"
 },
 {
   "Country": "Cameroon",
   "Population": "28,647,293",
   "Yearly": "2.63%",
   "Net": "732,757",
   "Density": "61",
   "Land Area": "472,710",
   "Migrants": "-4,800"
 },
 {
   "Country": "Niger",
   "Population": "27,202,843",
   "Yearly": "3.80%",
   "Net": "994,866",
   "Density": "21",
   "Land Area": "1,266,700",
   "Migrants": "1,000"
 },
 {
   "Country": "Australia",
   "Population": "26,439,111",
   "Yearly": "1.00%",
   "Net": "261,698",
   "Density": "3",
   "Land Area": "7,682,300",
   "Migrants": "139,991"
 },
 {
   "Country": "North Korea",
   "Population": "26,160,821",
   "Yearly": "0.35%",
   "Net": "91,405",
   "Density": "217",
   "Land Area": "120,410",
   "Migrants": "-2,000"
 },
 {
   "Country": "Taiwan",
   "Population": "23,923,276",
   "Yearly": "0.13%",
   "Net": "29,882",
   "Density": "676",
   "Land Area": "35,410",
   "Migrants": "23,999"
 },
 {
   "Country": "Mali",
   "Population": "23,293,698",
   "Yearly": "3.10%",
   "Net": "700,108",
   "Density": "19",
   "Land Area": "1,220,190",
   "Migrants": "-39,998"
 },
 {
   "Country": "Burkina Faso",
   "Population": "23,251,485",
   "Yearly": "2.55%",
   "Net": "577,723",
   "Density": "85",
   "Land Area": "273,600",
   "Migrants": "-24,998"
 },
 {
   "Country": "Syria",
   "Population": "23,227,014",
   "Yearly": "4.98%",
   "Net": "1,101,765",
   "Density": "126",
   "Land Area": "183,630",
   "Migrants": "757,103"
 },
 {
   "Country": "Sri Lanka",
   "Population": "21,893,579",
   "Yearly": "0.28%",
   "Net": "61,436",
   "Density": "349",
   "Land Area": "62,710",
   "Migrants": "-77,495"
 },
 {
   "Country": "Malawi",
   "Population": "20,931,751",
   "Yearly": "2.58%",
   "Net": "526,434",
   "Density": "222",
   "Land Area": "94,280",
   "Migrants": "-6,000"
 },
 {
   "Country": "Zambia",
   "Population": "20,569,737",
   "Yearly": "2.76%",
   "Net": "552,062",
   "Density": "28",
   "Land Area": "743,390",
   "Migrants": "-5,000"
 },
 {
   "Country": "Romania",
   "Population": "19,892,812",
   "Yearly": "1.19%",
   "Net": "233,545",
   "Density": "86",
   "Land Area": "230,170",
   "Migrants": "-254,616"
 },
 {
   "Country": "Chile",
   "Population": "19,629,590",
   "Yearly": "0.13%",
   "Net": "25,857",
   "Density": "26",
   "Land Area": "743,532",
   "Migrants": "-71,205"
 },
 {
   "Country": "Kazakhstan",
   "Population": "19,606,633",
   "Yearly": "1.08%",
   "Net": "208,635",
   "Density": "7",
   "Land Area": "2,699,700",
   "Migrants": "0"
 },
 {
   "Country": "Chad",
   "Population": "18,278,568",
   "Yearly": "3.13%",
   "Net": "555,253",
   "Density": "15",
   "Land Area": "1,259,200",
   "Migrants": "-2,000"
 },
 {
   "Country": "Ecuador",
   "Population": "18,190,484",
   "Yearly": "1.05%",
   "Net": "189,484",
   "Density": "73",
   "Land Area": "248,360",
   "Migrants": "-21,525"
 },
 {
   "Country": "Somalia",
   "Population": "18,143,378",
   "Yearly": "3.10%",
   "Net": "545,867",
   "Density": "29",
   "Land Area": "627,340",
   "Migrants": "-30,000"
 },
 {
   "Country": "Guatemala",
   "Population": "18,092,026",
   "Yearly": "1.39%",
   "Net": "248,118",
   "Density": "169",
   "Land Area": "107,160",
   "Migrants": "-9,110"
 },
 {
   "Country": "Senegal",
   "Population": "17,763,163",
   "Yearly": "2.58%",
   "Net": "446,714",
   "Density": "92",
   "Land Area": "192,530",
   "Migrants": "-19,999"
 },
 {
   "Country": "Netherlands",
   "Population": "17,618,299",
   "Yearly": "0.31%",
   "Net": "54,285",
   "Density": "522",
   "Land Area": "33,720",
   "Migrants": "29,998"
 },
 {
   "Country": "Cambodia",
   "Population": "16,944,826",
   "Yearly": "1.06%",
   "Net": "176,984",
   "Density": "96",
   "Land Area": "176,520",
   "Migrants": "-29,998"
 },
 {
   "Country": "Zimbabwe",
   "Population": "16,665,409",
   "Yearly": "2.11%",
   "Net": "344,872",
   "Density": "43",
   "Land Area": "386,850",
   "Migrants": "-9,999"
 },
 {
   "Country": "Guinea",
   "Population": "14,190,612",
   "Yearly": "2.39%",
   "Net": "331,271",
   "Density": "58",
   "Land Area": "245,720",
   "Migrants": "-4,000"
 },
 {
   "Country": "Rwanda",
   "Population": "14,094,683",
   "Yearly": "2.31%",
   "Net": "317,985",
   "Density": "571",
   "Land Area": "24,670",
   "Migrants": "-8,999"
 },
 {
   "Country": "Benin",
   "Population": "13,712,828",
   "Yearly": "2.70%",
   "Net": "359,964",
   "Density": "122",
   "Land Area": "112,760",
   "Migrants": "-200"
 },
 {
   "Country": "Burundi",
   "Population": "13,238,559",
   "Yearly": "2.71%",
   "Net": "348,983",
   "Density": "516",
   "Land Area": "25,680",
   "Migrants": "2,000"
 },
 {
   "Country": "Tunisia",
   "Population": "12,458,223",
   "Yearly": "0.83%",
   "Net": "102,106",
   "Density": "80",
   "Land Area": "155,360",
   "Migrants": "-4,000"
 },
 {
   "Country": "Bolivia",
   "Population": "12,388,571",
   "Yearly": "1.35%",
   "Net": "164,461",
   "Density": "11",
   "Land Area": "1,083,300",
   "Migrants": "-3,000"
 },
 {
   "Country": "Haiti",
   "Population": "11,724,763",
   "Yearly": "1.21%",
   "Net": "139,767",
   "Density": "425",
   "Land Area": "27,560",
   "Migrants": "-31,811"
 },
 {
   "Country": "Belgium",
   "Population": "11,686,140",
   "Yearly": "0.26%",
   "Net": "30,210",
   "Density": "386",
   "Land Area": "30,280",
   "Migrants": "23,999"
 },
 {
   "Country": "Jordan",
   "Population": "11,337,052",
   "Yearly": "0.45%",
   "Net": "51,183",
   "Density": "128",
   "Land Area": "88,780",
   "Migrants": "-157,392"
 },
 {
   "Country": "Dominican Republic",
   "Population": "11,332,972",
   "Yearly": "0.93%",
   "Net": "104,151",
   "Density": "235",
   "Land Area": "48,320",
   "Migrants": "-29,099"
 },
 {
   "Country": "Cuba",
   "Population": "11,194,449",
   "Yearly": "-0.16%",
   "Net": "-17,742",
   "Density": "105",
   "Land Area": "106,440",
   "Migrants": "-6,000"
 },
 {
   "Country": "South Sudan",
   "Population": "11,088,796",
   "Yearly": "1.61%",
   "Net": "175,632",
   "Density": "18",
   "Land Area": "610,952",
   "Migrants": "-23,291"
 },
 {
   "Country": "Sweden",
   "Population": "10,612,086",
   "Yearly": "0.59%",
   "Net": "62,739",
   "Density": "26",
   "Land Area": "410,340",
   "Migrants": "39,998"
 },
 {
   "Country": "Honduras",
   "Population": "10,593,798",
   "Yearly": "1.54%",
   "Net": "160,938",
   "Density": "95",
   "Land Area": "111,890",
   "Migrants": "-5,034"
 },
 {
   "Country": "Czech Republic (Czechia)",
   "Population": "10,495,295",
   "Yearly": "0.01%",
   "Net": "1,309",
   "Density": "136",
   "Land Area": "77,240",
   "Migrants": "22,011"
 },
 {
   "Country": "Azerbaijan",
   "Population": "10,412,651",
   "Yearly": "0.53%",
   "Net": "54,577",
   "Density": "126",
   "Land Area": "82,658",
   "Migrants": "0"
 },
 {
   "Country": "Greece",
   "Population": "10,341,277",
   "Yearly": "-0.42%",
   "Net": "-43,694",
   "Density": "80",
   "Land Area": "128,900",
   "Migrants": "5,000"
 },
 {
   "Country": "Papua New Guinea",
   "Population": "10,329,931",
   "Yearly": "1.85%",
   "Net": "187,312",
   "Density": "23",
   "Land Area": "452,860",
   "Migrants": "-800"
 },
 {
   "Country": "Portugal",
   "Population": "10,247,605",
   "Yearly": "-0.23%",
   "Net": "-23,260",
   "Density": "112",
   "Land Area": "91,590",
   "Migrants": "9,999"
 },
 {
   "Country": "Hungary",
   "Population": "10,156,239",
   "Yearly": "1.90%",
   "Net": "188,931",
   "Density": "112",
   "Land Area": "90,530",
   "Migrants": "-156,677"
 },
 {
   "Country": "Tajikistan",
   "Population": "10,143,543",
   "Yearly": "1.92%",
   "Net": "190,756",
   "Density": "72",
   "Land Area": "139,960",
   "Migrants": "-19,999"
 },
 {
   "Country": "United Arab Emirates",
   "Population": "9,516,871",
   "Yearly": "0.80%",
   "Net": "75,742",
   "Density": "114",
   "Land Area": "83,600",
   "Migrants": "0"
 },
 {
   "Country": "Belarus",
   "Population": "9,498,238",
   "Yearly": "-0.39%",
   "Net": "-36,716",
   "Density": "47",
   "Land Area": "202,910",
   "Migrants": "-4,282"
 },
 {
   "Country": "Israel",
   "Population": "9,174,520",
   "Yearly": "1.51%",
   "Net": "136,211",
   "Density": "424",
   "Land Area": "21,640",
   "Migrants": "9,999"
 },
 {
   "Country": "Togo",
   "Population": "9,053,799",
   "Yearly": "2.32%",
   "Net": "205,100",
   "Density": "166",
   "Land Area": "54,390",
   "Migrants": "-2,000"
 },
 {
   "Country": "Austria",
   "Population": "8,958,960",
   "Yearly": "0.22%",
   "Net": "19,343",
   "Density": "109",
   "Land Area": "82,409",
   "Migrants": "19,999"
 },
 {
   "Country": "Switzerland",
   "Population": "8,796,669",
   "Yearly": "0.64%",
   "Net": "56,197",
   "Density": "223",
   "Land Area": "39,516",
   "Migrants": "39,998"
 },
 {
   "Country": "Sierra Leone",
   "Population": "8,791,092",
   "Yearly": "2.15%",
   "Net": "185,374",
   "Density": "122",
   "Land Area": "72,180",
   "Migrants": "-4,000"
 },
 {
   "Country": "Laos",
   "Population": "7,633,779",
   "Yearly": "1.39%",
   "Net": "104,304",
   "Density": "33",
   "Land Area": "230,800",
   "Migrants": "-9,999"
 },
 {
   "Country": "Hong Kong",
   "Population": "7,491,609",
   "Yearly": "0.04%",
   "Net": "2,744",
   "Density": "7,135",
   "Land Area": "1,050",
   "Migrants": "19,999"
 },
 {
   "Country": "Serbia",
   "Population": "7,149,077",
   "Yearly": "-1.00%",
   "Net": "-72,288",
   "Density": "82",
   "Land Area": "87,460",
   "Migrants": "-9,999"
 },
 {
   "Country": "Nicaragua",
   "Population": "7,046,310",
   "Yearly": "1.41%",
   "Net": "97,918",
   "Density": "59",
   "Land Area": "120,340",
   "Migrants": "-8,000"
 },
 {
   "Country": "Libya",
   "Population": "6,888,388",
   "Yearly": "1.12%",
   "Net": "76,047",
   "Density": "4",
   "Land Area": "1,759,540",
   "Migrants": "-2,000"
 },
 {
   "Country": "Paraguay",
   "Population": "6,861,524",
   "Yearly": "1.19%",
   "Net": "80,780",
   "Density": "17",
   "Land Area": "397,300",
   "Migrants": "-12,499"
 },
 {
   "Country": "Kyrgyzstan",
   "Population": "6,735,347",
   "Yearly": "1.58%",
   "Net": "104,724",
   "Density": "35",
   "Land Area": "191,800",
   "Migrants": "-9,999"
 },
 {
   "Country": "Bulgaria",
   "Population": "6,687,717",
   "Yearly": "-1.39%",
   "Net": "-94,236",
   "Density": "62",
   "Land Area": "108,560",
   "Migrants": "-4,800"
 },
 {
   "Country": "Turkmenistan",
   "Population": "6,516,100",
   "Yearly": "1.33%",
   "Net": "85,330",
   "Density": "14",
   "Land Area": "469,930",
   "Migrants": "-4,000"
 },
 {
   "Country": "El Salvador",
   "Population": "6,364,943",
   "Yearly": "0.45%",
   "Net": "28,551",
   "Density": "307",
   "Land Area": "20,720",
   "Migrants": "-23,249"
 },
 {
   "Country": "Congo",
   "Population": "6,106,869",
   "Yearly": "2.29%",
   "Net": "136,445",
   "Density": "18",
   "Land Area": "341,500",
   "Migrants": "-1,000"
 },
 {
   "Country": "Singapore",
   "Population": "6,014,723",
   "Yearly": "0.65%",
   "Net": "39,034",
   "Density": "8,592",
   "Land Area": "700",
   "Migrants": "26,998"
 },
 {
   "Country": "Denmark",
   "Population": "5,910,913",
   "Yearly": "0.49%",
   "Net": "28,652",
   "Density": "139",
   "Land Area": "42,430",
   "Migrants": "19,999"
 },
 {
   "Country": "Slovakia",
   "Population": "5,795,199",
   "Yearly": "2.69%",
   "Net": "151,746",
   "Density": "121",
   "Land Area": "48,088",
   "Migrants": "-112,067"
 },
 {
   "Country": "Central African Republic",
   "Population": "5,742,315",
   "Yearly": "2.92%",
   "Net": "163,171",
   "Density": "9",
   "Land Area": "622,980",
   "Migrants": "-14,716"
 },
 {
   "Country": "Finland",
   "Population": "5,545,475",
   "Yearly": "0.09%",
   "Net": "4,730",
   "Density": "18",
   "Land Area": "303,890",
   "Migrants": "13,999"
 },
 {
   "Country": "Norway",
   "Population": "5,474,360",
   "Yearly": "0.74%",
   "Net": "40,041",
   "Density": "15",
   "Land Area": "365,268",
   "Migrants": "27,998"
 },
 {
   "Country": "Liberia",
   "Population": "5,418,377",
   "Yearly": "2.18%",
   "Net": "115,696",
   "Density": "56",
   "Land Area": "96,320",
   "Migrants": "-5,000"
 },
 {
   "Country": "State of Palestine",
   "Population": "5,371,230",
   "Yearly": "2.31%",
   "Net": "121,158",
   "Density": "892",
   "Land Area": "6,020",
   "Migrants": "-5,000"
 },
 {
   "Country": "Lebanon",
   "Population": "5,353,930",
   "Yearly": "-2.47%",
   "Net": "-135,809",
   "Density": "523",
   "Land Area": "10,230",
   "Migrants": "-177,331"
 },
 {
   "Country": "New Zealand",
   "Population": "5,228,100",
   "Yearly": "0.83%",
   "Net": "42,812",
   "Density": "20",
   "Land Area": "263,310",
   "Migrants": "12,999"
 },
 {
   "Country": "Costa Rica",
   "Population": "5,212,173",
   "Yearly": "0.60%",
   "Net": "31,344",
   "Density": "102",
   "Land Area": "51,060",
   "Migrants": "3,750"
 },
 {
   "Country": "Ireland",
   "Population": "5,056,935",
   "Yearly": "0.67%",
   "Net": "33,826",
   "Density": "73",
   "Land Area": "68,890",
   "Migrants": "9,999"
 },
 {
   "Country": "Mauritania",
   "Population": "4,862,989",
   "Yearly": "2.68%",
   "Net": "126,850",
   "Density": "5",
   "Land Area": "1,030,700",
   "Migrants": "3,000"
 },
 {
   "Country": "Oman",
   "Population": "4,644,384",
   "Yearly": "1.49%",
   "Net": "68,086",
   "Density": "15",
   "Land Area": "309,500",
   "Migrants": "0"
 },
 {
   "Country": "Panama",
   "Population": "4,468,087",
   "Yearly": "1.35%",
   "Net": "59,506",
   "Density": "60",
   "Land Area": "74,340",
   "Migrants": "7,262"
 },
 {
   "Country": "Kuwait",
   "Population": "4,310,108",
   "Yearly": "0.97%",
   "Net": "41,235",
   "Density": "242",
   "Land Area": "17,820",
   "Migrants": "11,999"
 },
 {
   "Country": "Croatia",
   "Population": "4,008,617",
   "Yearly": "-0.54%",
   "Net": "-21,741",
   "Density": "72",
   "Land Area": "55,960",
   "Migrants": "-2,000"
 },
 {
   "Country": "Eritrea",
   "Population": "3,748,901",
   "Yearly": "1.76%",
   "Net": "64,869",
   "Density": "37",
   "Land Area": "101,000",
   "Migrants": "-15,297"
 },
 {
   "Country": "Georgia",
   "Population": "3,728,282",
   "Yearly": "-0.43%",
   "Net": "-16,103",
   "Density": "54",
   "Land Area": "69,490",
   "Migrants": "-9,999"
 },
 {
   "Country": "Mongolia",
   "Population": "3,447,157",
   "Yearly": "1.44%",
   "Net": "48,791",
   "Density": "2",
   "Land Area": "1,553,560",
   "Migrants": "-850"
 },
 {
   "Country": "Moldova",
   "Population": "3,435,931",
   "Yearly": "4.98%",
   "Net": "162,935",
   "Density": "105",
   "Land Area": "32,850",
   "Migrants": "-125,204"
 },
 {
   "Country": "Uruguay",
   "Population": "3,423,108",
   "Yearly": "0.01%",
   "Net": "314",
   "Density": "20",
   "Land Area": "175,020",
   "Migrants": "-1,500"
 },
 {
   "Country": "Puerto Rico",
   "Population": "3,260,314",
   "Yearly": "0.24%",
   "Net": "7,907",
   "Density": "368",
   "Land Area": "8,870",
   "Migrants": "19,835"
 },
 {
   "Country": "Bosnia and Herzegovina",
   "Population": "3,210,847",
   "Yearly": "-0.70%",
   "Net": "-22,679",
   "Density": "63",
   "Land Area": "51,000",
   "Migrants": "-500"
 },
 {
   "Country": "Albania",
   "Population": "2,832,439",
   "Yearly": "-0.35%",
   "Net": "-9,882",
   "Density": "103",
   "Land Area": "27,400",
   "Migrants": "-8,000"
 },
 {
   "Country": "Jamaica",
   "Population": "2,825,544",
   "Yearly": "-0.06%",
   "Net": "-1,833",
   "Density": "261",
   "Land Area": "10,830",
   "Migrants": "-10,999"
 },
 {
   "Country": "Armenia",
   "Population": "2,777,970",
   "Yearly": "-0.09%",
   "Net": "-2,499",
   "Density": "98",
   "Land Area": "28,470",
   "Migrants": "-5,000"
 },
 {
   "Country": "Gambia",
   "Population": "2,773,168",
   "Yearly": "2.48%",
   "Net": "67,176",
   "Density": "274",
   "Land Area": "10,120",
   "Migrants": "-3,000"
 },
 {
   "Country": "Lithuania",
   "Population": "2,718,352",
   "Yearly": "-1.15%",
   "Net": "-31,703",
   "Density": "43",
   "Land Area": "62,674",
   "Migrants": "-13,128"
 },
 {
   "Country": "Qatar",
   "Population": "2,716,391",
   "Yearly": "0.79%",
   "Net": "21,269",
   "Density": "234",
   "Land Area": "11,610",
   "Migrants": "0"
 },
 {
   "Country": "Botswana",
   "Population": "2,675,352",
   "Yearly": "1.71%",
   "Net": "45,056",
   "Density": "5",
   "Land Area": "566,730",
   "Migrants": "3,000"
 },
 {
   "Country": "Namibia",
   "Population": "2,604,172",
   "Yearly": "1.45%",
   "Net": "37,160",
   "Density": "3",
   "Land Area": "823,290",
   "Migrants": "-3,916"
 },
 {
   "Country": "Gabon",
   "Population": "2,436,566",
   "Yearly": "1.99%",
   "Net": "47,574",
   "Density": "9",
   "Land Area": "257,670",
   "Migrants": "1,000"
 },
 {
   "Country": "Lesotho",
   "Population": "2,330,318",
   "Yearly": "1.06%",
   "Net": "24,493",
   "Density": "77",
   "Land Area": "30,360",
   "Migrants": "-4,000"
 },
 {
   "Country": "Guinea-Bissau",
   "Population": "2,150,842",
   "Yearly": "2.15%",
   "Net": "45,276",
   "Density": "76",
   "Land Area": "28,120",
   "Migrants": "-1,400"
 },
 {
   "Country": "Slovenia",
   "Population": "2,119,675",
   "Yearly": "-0.01%",
   "Net": "-169",
   "Density": "105",
   "Land Area": "20,140",
   "Migrants": "2,000"
 },
 {
   "Country": "North Macedonia",
   "Population": "2,085,679",
   "Yearly": "-0.38%",
   "Net": "-7,920",
   "Density": "83",
   "Land Area": "25,220",
   "Migrants": "-1,000"
 },
 {
   "Country": "Latvia",
   "Population": "1,830,211",
   "Yearly": "-1.10%",
   "Net": "-20,440",
   "Density": "29",
   "Land Area": "62,200",
   "Migrants": "-7,630"
 },
 {
   "Country": "Equatorial Guinea",
   "Population": "1,714,671",
   "Yearly": "2.37%",
   "Net": "39,763",
   "Density": "61",
   "Land Area": "28,050",
   "Migrants": "4,000"
 },
 {
   "Country": "Trinidad and Tobago",
   "Population": "1,534,937",
   "Yearly": "0.25%",
   "Net": "3,893",
   "Density": "299",
   "Land Area": "5,130",
   "Migrants": "-800"
 },
 {
   "Country": "Bahrain",
   "Population": "1,485,509",
   "Yearly": "0.90%",
   "Net": "13,276",
   "Density": "1,955",
   "Land Area": "760",
   "Migrants": "0"
 },
 {
   "Country": "Timor-Leste",
   "Population": "1,360,596",
   "Yearly": "1.44%",
   "Net": "19,300",
   "Density": "91",
   "Land Area": "14,870",
   "Migrants": "-5,000"
 },
 {
   "Country": "Estonia",
   "Population": "1,322,765",
   "Yearly": "-0.25%",
   "Net": "-3,297",
   "Density": "31",
   "Land Area": "42,390",
   "Migrants": "-1,000"
 },
 {
   "Country": "Mauritius",
   "Population": "1,300,557",
   "Yearly": "0.08%",
   "Net": "1,088",
   "Density": "641",
   "Land Area": "2,030",
   "Migrants": "0"
 },
 {
   "Country": "Cyprus",
   "Population": "1,260,138",
   "Yearly": "0.69%",
   "Net": "8,650",
   "Density": "136",
   "Land Area": "9,240",
   "Migrants": "5,000"
 },
 {
   "Country": "Eswatini",
   "Population": "1,210,822",
   "Yearly": "0.76%",
   "Net": "9,152",
   "Density": "70",
   "Land Area": "17,200",
   "Migrants": "-5,268"
 },
 {
   "Country": "Djibouti",
   "Population": "1,136,455",
   "Yearly": "1.39%",
   "Net": "15,606",
   "Density": "49",
   "Land Area": "23,180",
   "Migrants": "900"
 },
 {
   "Country": "Réunion",
   "Population": "981,796",
   "Yearly": "0.80%",
   "Net": "7,744",
   "Density": "393",
   "Land Area": "2,500",
   "Migrants": "-630"
 },
 {
   "Country": "Fiji",
   "Population": "936,375",
   "Yearly": "0.71%",
   "Net": "6,609",
   "Density": "51",
   "Land Area": "18,270",
   "Migrants": "-3,289"
 },
 {
   "Country": "Comoros",
   "Population": "852,075",
   "Yearly": "1.83%",
   "Net": "15,301",
   "Density": "458",
   "Land Area": "1,861",
   "Migrants": "-2,000"
 },
 {
   "Country": "Guyana",
   "Population": "813,834",
   "Yearly": "0.63%",
   "Net": "5,108",
   "Density": "4",
   "Land Area": "196,850",
   "Migrants": "-3,900"
 },
 {
   "Country": "Bhutan",
   "Population": "787,424",
   "Yearly": "0.64%",
   "Net": "4,969",
   "Density": "21",
   "Land Area": "38,117",
   "Migrants": "300"
 },
 {
   "Country": "Solomon Islands",
   "Population": "740,424",
   "Yearly": "2.23%",
   "Net": "16,151",
   "Density": "26",
   "Land Area": "27,990",
   "Migrants": "-1,600"
 },
 {
   "Country": "Macao",
   "Population": "704,149",
   "Yearly": "1.29%",
   "Net": "8,981",
   "Density": "23,472",
   "Land Area": "30",
   "Migrants": "5,000"
 },
 {
   "Country": "Luxembourg",
   "Population": "654,768",
   "Yearly": "1.11%",
   "Net": "7,169",
   "Density": "253",
   "Land Area": "2,590",
   "Migrants": "4,883"
 },
 {
   "Country": "Montenegro",
   "Population": "626,485",
   "Yearly": "-0.10%",
   "Net": "-597",
   "Density": "47",
   "Land Area": "13,450",
   "Migrants": "-480"
 },
 {
   "Country": "Suriname",
   "Population": "623,236",
   "Yearly": "0.84%",
   "Net": "5,196",
   "Density": "4",
   "Land Area": "156,000",
   "Migrants": "-1,000"
 },
 {
   "Country": "Cabo Verde",
   "Population": "598,682",
   "Yearly": "0.93%",
   "Net": "5,533",
   "Density": "149",
   "Land Area": "4,030",
   "Migrants": "-1,227"
 },
 {
   "Country": "Western Sahara",
   "Population": "587,259",
   "Yearly": "1.96%",
   "Net": "11,273",
   "Density": "2",
   "Land Area": "266,000",
   "Migrants": "5,600"
 },
 {
   "Country": "Micronesia",
   "Population": "544,321",
   "Yearly": "0.98%",
   "Net": "5,308",
   "Density": "778",
   "Land Area": "700",
   "Migrants": "-1,642"
 },
 {
   "Country": "Malta",
   "Population": "535,064",
   "Yearly": "0.33%",
   "Net": "1,778",
   "Density": "1,672",
   "Land Area": "320",
   "Migrants": "850"
 },
 {
   "Country": "Maldives",
   "Population": "521,021",
   "Yearly": "-0.53%",
   "Net": "-2,766",
   "Density": "1,737",
   "Land Area": "300",
   "Migrants": "-8,652"
 },
 {
   "Country": "Brunei",
   "Population": "452,524",
   "Yearly": "0.78%",
   "Net": "3,522",
   "Density": "86",
   "Land Area": "5,270",
   "Migrants": "0"
 },
 {
   "Country": "Bahamas",
   "Population": "412,623",
   "Yearly": "0.64%",
   "Net": "2,639",
   "Density": "41",
   "Land Area": "10,010",
   "Migrants": "1,000"
 },
 {
   "Country": "Belize",
   "Population": "410,825",
   "Yearly": "1.37%",
   "Net": "5,553",
   "Density": "18",
   "Land Area": "22,810",
   "Migrants": "600"
 },
 {
   "Country": "Guadeloupe",
   "Population": "395,839",
   "Yearly": "0.02%",
   "Net": "87",
   "Density": "234",
   "Land Area": "1,690",
   "Migrants": "-800"
 },
 {
   "Country": "Iceland",
   "Population": "375,318",
   "Yearly": "0.65%",
   "Net": "2,419",
   "Density": "4",
   "Land Area": "100,250",
   "Migrants": "380"
 },
 {
   "Country": "Martinique",
   "Population": "366,981",
   "Yearly": "-0.14%",
   "Net": "-526",
   "Density": "346",
   "Land Area": "1,060",
   "Migrants": "-650"
 },
 {
   "Country": "Mayotte",
   "Population": "335,995",
   "Yearly": "3.03%",
   "Net": "9,894",
   "Density": "896",
   "Land Area": "375",
   "Migrants": "0"
 },
 {
   "Country": "Vanuatu",
   "Population": "334,506",
   "Yearly": "2.38%",
   "Net": "7,766",
   "Density": "27",
   "Land Area": "12,190",
   "Migrants": "0"
 },
 {
   "Country": "French Guiana",
   "Population": "312,155",
   "Yearly": "2.49%",
   "Net": "7,598",
   "Density": "4",
   "Land Area": "82,200",
   "Migrants": "1,200"
 },
 {
   "Country": "French Polynesia",
   "Population": "308,872",
   "Yearly": "0.85%",
   "Net": "2,593",
   "Density": "84",
   "Land Area": "3,660",
   "Migrants": "-100"
 },
 {
   "Country": "New Caledonia",
   "Population": "292,991",
   "Yearly": "1.05%",
   "Net": "3,041",
   "Density": "16",
   "Land Area": "18,280",
   "Migrants": "500"
 },
 {
   "Country": "Barbados",
   "Population": "281,995",
   "Yearly": "0.13%",
   "Net": "360",
   "Density": "656",
   "Land Area": "430",
   "Migrants": "-80"
 },
 {
   "Country": "Sao Tome & Principe",
   "Population": "231,856",
   "Yearly": "1.97%",
   "Net": "4,476",
   "Density": "242",
   "Land Area": "960",
   "Migrants": "-600"
 },
 {
   "Country": "Samoa",
   "Population": "225,681",
   "Yearly": "1.48%",
   "Net": "3,299",
   "Density": "80",
   "Land Area": "2,830",
   "Migrants": "-1,500"
 },
 {
   "Country": "Curaçao",
   "Population": "192,077",
   "Yearly": "0.48%",
   "Net": "914",
   "Density": "433",
   "Land Area": "444",
   "Migrants": "515"
 },
 {
   "Country": "Saint Lucia",
   "Population": "180,251",
   "Yearly": "0.22%",
   "Net": "394",
   "Density": "295",
   "Land Area": "610",
   "Migrants": "0"
 },
 {
   "Country": "Guam",
   "Population": "172,952",
   "Yearly": "0.69%",
   "Net": "1,178",
   "Density": "320",
   "Land Area": "540",
   "Migrants": "-500"
 },
 {
   "Country": "Kiribati",
   "Population": "133,515",
   "Yearly": "1.74%",
   "Net": "2,283",
   "Density": "165",
   "Land Area": "810",
   "Migrants": "-400"
 },
 {
   "Country": "Grenada",
   "Population": "126,183",
   "Yearly": "0.59%",
   "Net": "745",
   "Density": "371",
   "Land Area": "340",
   "Migrants": "-200"
 },
 {
   "Country": "Tonga",
   "Population": "107,773",
   "Yearly": "0.86%",
   "Net": "915",
   "Density": "150",
   "Land Area": "720",
   "Migrants": "-800"
 },
 {
   "Country": "Seychelles",
   "Population": "107,660",
   "Yearly": "0.51%",
   "Net": "542",
   "Density": "234",
   "Land Area": "460",
   "Migrants": "-200"
 },
 {
   "Country": "Aruba",
   "Population": "106,277",
   "Yearly": "-0.16%",
   "Net": "-168",
   "Density": "590",
   "Land Area": "180",
   "Migrants": "157"
 },
 {
   "Country": "St. Vincent & Grenadines",
   "Population": "103,698",
   "Yearly": "-0.24%",
   "Net": "-250",
   "Density": "266",
   "Land Area": "390",
   "Migrants": "-200"
 },
 {
   "Country": "U.S. Virgin Islands",
   "Population": "98,750",
   "Yearly": "-0.72%",
   "Net": "-715",
   "Density": "282",
   "Land Area": "350",
   "Migrants": "-450"
 },
 {
   "Country": "Antigua and Barbuda",
   "Population": "94,298",
   "Yearly": "0.57%",
   "Net": "535",
   "Density": "214",
   "Land Area": "440",
   "Migrants": "0"
 },
 {
   "Country": "Isle of Man",
   "Population": "84,710",
   "Yearly": "0.23%",
   "Net": "191",
   "Density": "149",
   "Land Area": "570",
   "Migrants": "340"
 },
 {
   "Country": "Andorra",
   "Population": "80,088",
   "Yearly": "0.33%",
   "Net": "264",
   "Density": "170",
   "Land Area": "470",
   "Migrants": "200"
 },
 {
   "Country": "Dominica",
   "Population": "73,040",
   "Yearly": "0.42%",
   "Net": "303",
   "Density": "97",
   "Land Area": "750",
   "Migrants": "-40"
 },
 {
   "Country": "Cayman Islands",
   "Population": "69,310",
   "Yearly": "0.88%",
   "Net": "604",
   "Density": "289",
   "Land Area": "240",
   "Migrants": "400"
 },
 {
   "Country": "Bermuda",
   "Population": "64,069",
   "Yearly": "-0.18%",
   "Net": "-115",
   "Density": "1,281",
   "Land Area": "50",
   "Migrants": "0"
 },
 {
   "Country": "Greenland",
   "Population": "56,643",
   "Yearly": "0.31%",
   "Net": "177",
   "Density": "0",
   "Land Area": "410,450",
   "Migrants": "-100"
 },
 {
   "Country": "Faeroe Islands",
   "Population": "53,270",
   "Yearly": "0.34%",
   "Net": "180",
   "Density": "38",
   "Land Area": "1,396",
   "Migrants": "0"
 },
 {
   "Country": "Northern Mariana Islands",
   "Population": "49,796",
   "Yearly": "0.49%",
   "Net": "245",
   "Density": "108",
   "Land Area": "460",
   "Migrants": "-50"
 },
 {
   "Country": "Saint Kitts & Nevis",
   "Population": "47,755",
   "Yearly": "0.21%",
   "Net": "98",
   "Density": "184",
   "Land Area": "260",
   "Migrants": "20"
 },
 {
   "Country": "Turks and Caicos",
   "Population": "46,062",
   "Yearly": "0.79%",
   "Net": "359",
   "Density": "48",
   "Land Area": "950",
   "Migrants": "200"
 },
 {
   "Country": "Sint Maarten",
   "Population": "44,222",
   "Yearly": "0.11%",
   "Net": "47",
   "Density": "1,301",
   "Land Area": "34",
   "Migrants": "0"
 },
 {
   "Country": "American Samoa",
   "Population": "43,914",
   "Yearly": "-0.81%",
   "Net": "-359",
   "Density": "220",
   "Land Area": "200",
   "Migrants": "-790"
 },
 {
   "Country": "Marshall Islands",
   "Population": "41,996",
   "Yearly": "1.03%",
   "Net": "427",
   "Density": "233",
   "Land Area": "180",
   "Migrants": "0"
 },
 {
   "Country": "Liechtenstein",
   "Population": "39,584",
   "Yearly": "0.65%",
   "Net": "257",
   "Density": "247",
   "Land Area": "160",
   "Migrants": "150"
 },
 {
   "Country": "Monaco",
   "Population": "36,297",
   "Yearly": "-0.47%",
   "Net": "-172",
   "Density": "24,360",
   "Land Area": "1",
   "Migrants": "200"
 },
 {
   "Country": "San Marino",
   "Population": "33,642",
   "Yearly": "-0.05%",
   "Net": "-18",
   "Density": "561",
   "Land Area": "60",
   "Migrants": "100"
 },
 {
   "Country": "Gibraltar",
   "Population": "32,688",
   "Yearly": "0.12%",
   "Net": "39",
   "Density": "3,269",
   "Land Area": "10",
   "Migrants": "-24"
 },
 {
   "Country": "Saint Martin",
   "Population": "32,077",
   "Yearly": "0.90%",
   "Net": "286",
   "Density": "605",
   "Land Area": "53",
   "Migrants": "0"
 },
 {
   "Country": "British Virgin Islands",
   "Population": "31,538",
   "Yearly": "0.74%",
   "Net": "233",
   "Density": "210",
   "Land Area": "150",
   "Migrants": "200"
 },
 {
   "Country": "Caribbean Netherlands",
   "Population": "27,148",
   "Yearly": "0.45%",
   "Net": "122",
   "Density": "83",
   "Land Area": "328",
   "Migrants": "100"
 },
 {
   "Country": "Palau",
   "Population": "18,058",
   "Yearly": "0.02%",
   "Net": "3",
   "Density": "39",
   "Land Area": "460",
   "Migrants": "-20"
 },
 {
   "Country": "Cook Islands",
   "Population": "17,044",
   "Yearly": "0.19%",
   "Net": "33",
   "Density": "71",
   "Land Area": "240",
   "Migrants": "-93"
 },
 {
   "Country": "Anguilla",
   "Population": "15,899",
   "Yearly": "0.26%",
   "Net": "42",
   "Density": "177",
   "Land Area": "90",
   "Migrants": "0"
 },
 {
   "Country": "Nauru",
   "Population": "12,780",
   "Yearly": "0.88%",
   "Net": "112",
   "Density": "639",
   "Land Area": "20",
   "Migrants": "-140"
 },
 {
   "Country": "Wallis & Futuna",
   "Population": "11,502",
   "Yearly": "-0.60%",
   "Net": "-70",
   "Density": "82",
   "Land Area": "140",
   "Migrants": "-119"
 },
 {
   "Country": "Tuvalu",
   "Population": "11,396",
   "Yearly": "0.74%",
   "Net": "84",
   "Density": "380",
   "Land Area": "30",
   "Migrants": "-60"
 },
 {
   "Country": "Saint Barthelemy",
   "Population": "10,994",
   "Yearly": "0.25%",
   "Net": "27",
   "Density": "524",
   "Land Area": "21",
   "Migrants": "0"
 },
 {
   "Country": "Saint Pierre & Miquelon",
   "Population": "5,840",
   "Yearly": "-0.38%",
   "Net": "-22",
   "Density": "25",
   "Land Area": "230",
   "Migrants": "0"
 },
 {
   "Country": "Saint Helena",
   "Population": "5,314",
   "Yearly": "-1.12%",
   "Net": "-60",
   "Density": "14",
   "Land Area": "390",
   "Migrants": "0"
 },
 {
   "Country": "Montserrat",
   "Population": "4,386",
   "Yearly": "-0.09%",
   "Net": "-4",
   "Density": "44",
   "Land Area": "100",
   "Migrants": "0"
 },
 {
   "Country": "Falkland Islands",
   "Population": "3,791",
   "Yearly": "0.29%",
   "Net": "11",
   "Density": "0",
   "Land Area": "12,170",
   "Migrants": "0"
 },
 {
   "Country": "Niue",
   "Population": "1,935",
   "Yearly": "0.05%",
   "Net": "1",
   "Density": "7",
   "Land Area": "260",
   "Migrants": "0"
 },
 {
   "Country": "Tokelau",
   "Population": "1,893",
   "Yearly": "1.18%",
   "Net": "22",
   "Density": "189",
   "Land Area": "10",
   "Migrants": "0"
 },
 {
   "Country": "Holy See",
   "Population": "518",
   "Yearly": "1.57%",
   "Net": "8",
   "Density": "1,295",
   "Land Area": "0",
   "Migrants": "0"
 }
]`;

export const CountryDataWordometer: IDataWorldometer[] = JSON.parse(jsonString);