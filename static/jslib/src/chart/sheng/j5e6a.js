var bubu ={ s64:"13",s65:"27",s11:"20",s12:"8",s13:"33",s14:"46",s15:"185",s21:"98",s22:"35",s23:"197",s31:"4",s32:"30",s33:"31",s34:"102",s35:"92",s36:"178",s37:"85",s41:"35",s42:"63",s43:"95",s44:"369",s45:"78",s46:"54",s50:"48",s51:"166",s52:"129",s53:"152",s54:"45",s61:"54",s62:"58",s63:"11" };
var title = "2009年各地区自然保护区个数";
var unit = "个";
function getColor(d) {
    return d > 180 ? '#800026' :
           d > 100  ? '#BD0026' :
           d > 80  ? '#E31A1C' :
           d > 60  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 35  ? '#FEB24C' :
           d > 20   ? '#FED976' :
           d > 1   ? '#FFEDA0' :
           d < 0   ? '#000000' :
                      '#000000';
}
var vgrades = [1, 20, 35, 50, 60, 80, 100, 180];