var bubu ={ s64:"9555",s65:"8833",s11:"20320",s12:"14218",s13:"10031",s14:"9252",s15:"10930",s21:"10845",s22:"9598",s23:"8564",s31:"24429",s32:"12990",s33:"16986",s34:"9204",s35:"12896",s36:"9105",s37:"12633",s41:"9743",s42:"10593",s43:"10551",s44:"16982",s45:"9473",s46:"9422",s50:"10541",s51:"9559",s52:"9887",s53:"9234",s54:"7761",s61:"9901",s62:"9150",s63:"8819" };
var title = "2007年各地区城镇居民消费水平";
var unit = "元";
function getColor(d) {
    return d > 17000 ? '#800026' :
           d > 13000  ? '#BD0026' :
           d > 10800  ? '#E31A1C' :
           d > 10000  ? '#FC4E2A' :
           d > 9600   ? '#FD8D3C' :
           d > 9300  ? '#FEB24C' :
           d > 9000   ? '#FED976' :
           d > 7700   ? '#FFEDA0' :
           d < 0   ? '#000000' :
                      '#000000';
}
var vgrades = [7700, 9000, 9300, 9600, 10000, 10800, 13000, 17000];