var bubu ={ s64:"37213.38",s65:"68617.3",s11:"107816.69",s12:"56928.16",s13:"222914.35",s14:"104594.39",s15:"60405.23",s21:"220996.73",s22:"97857.83",s23:"108972.59",s31:"226614.08",s32:"505598.33",s33:"338100.92",s34:"175327.09",s35:"226997.87",s36:"141266.69",s37:"334254.73",s41:"296467.29",s42:"246582.56",s43:"252072.98",s44:"690887.04",s45:"319808.27",s46:"35158.63",s50:"134240.39",s51:"252961.78",s52:"55112.42",s53:"83758.94",s54:"3335.56",s61:"99348.16",s62:"44335.27",s63:"19948.49" };
var title = "2007年各地区废水排放总量";
var unit = "万吨";
function getColor(d) {
    return d > 330000 ? '#800026' :
           d > 253000  ? '#BD0026' :
           d > 225000  ? '#E31A1C' :
           d > 140000  ? '#FC4E2A' :
           d > 100000   ? '#FD8D3C' :
           d > 61000  ? '#FEB24C' :
           d > 40000   ? '#FED976' :
           d > 3300   ? '#FFEDA0' :
           d < 0   ? '#000000' :
                      '#000000';
}
var vgrades = [3300, 40000, 61000, 100000, 140000, 225000, 253000, 330000];