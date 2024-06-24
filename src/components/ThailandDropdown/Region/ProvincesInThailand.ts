export type Provinces = {
  NameTH: string;
  NameEN: string;
  isChecked: boolean;
  id: number;
};

export interface PVT {
  region: string;
  selectAll: boolean;
  id: number;
  provinces: Provinces[];
}

const provincesInThailand: PVT[] = [
  {
    region: 'North',
    selectAll: false,
    id: 1,
    provinces: [
      {
        NameEN: 'Chiang Mai',
        NameTH: 'เชียงใหม่',
        id: 38,
        isChecked: false,
      },
      {
        NameEN: 'Lamphun',
        NameTH: 'ลำพูน',
        id: 39,
        isChecked: false,
      },
      {
        NameEN: 'Lampang',
        NameTH: 'ลำปาง',
        id: 40,
        isChecked: false,
      },
      {
        NameEN: 'Uttaradit',
        NameTH: 'อุตรดิตถ์',
        id: 41,
        isChecked: false,
      },
      {
        NameEN: 'Phrae',
        NameTH: 'แพร่',
        id: 42,
        isChecked: false,
      },
      {
        NameEN: 'Nan',
        NameTH: 'น่าน',
        id: 43,
        isChecked: false,
      },
      {
        NameEN: 'Phayao',
        NameTH: 'พะเยา',
        id: 44,
        isChecked: false,
      },
      {
        NameEN: 'Chiang Rai',
        NameTH: 'เชียงราย',
        id: 45,
        isChecked: false,
      },
      {
        NameEN: 'Mae Hong Son',
        NameTH: 'แม่ฮ่องสอน',
        id: 46,
        isChecked: false,
      },
    ],
  },
  {
    region: 'Central',
    selectAll: false,
    id: 2,
    provinces: [
      {
        NameEN: 'Bangkok',
        NameTH: 'กรุงเทพมหานคร',
        id: 1,
        isChecked: false,
      },
      {
        NameEN: 'Samut Prakan',
        NameTH: 'สมุทรปราการ',
        id: 2,
        isChecked: false,
      },
      {
        NameEN: 'Nonthaburi',
        NameTH: 'นนทบุรี',
        id: 3,
        isChecked: false,
      },
      {
        NameEN: 'Pathum Thani',
        NameTH: 'ปทุมธานี',
        id: 4,
        isChecked: false,
      },
      {
        NameEN: 'Phra Nakhon Si Ayutthaya',
        NameTH: 'พระนครศรีอยุธยา',
        id: 5,
        isChecked: false,
      },
      {
        NameEN: 'Ang Thong',
        NameTH: 'อ่างทอง',
        id: 6,
        isChecked: false,
      },
      {
        NameEN: 'Loburi',
        NameTH: 'ลพบุรี',
        id: 7,
        isChecked: false,
      },
      {
        NameEN: 'Sing Buri',
        NameTH: 'สิงห์บุรี',
        id: 8,
        isChecked: false,
      },
      {
        NameEN: 'Chai Nat',
        NameTH: 'ชัยนาท',
        id: 9,
        isChecked: false,
      },
      {
        NameEN: 'Saraburi',
        NameTH: 'สระบุรี',
        id: 10,
        isChecked: false,
      },
      {
        NameEN: 'Nakhon Nayok',
        NameTH: 'นครนายก',
        id: 17,
        isChecked: false,
      },
      {
        NameEN: 'Nakhon Sawan',
        NameTH: 'นครสวรรค์',
        id: 47,
        isChecked: false,
      },
      {
        NameEN: 'Uthai Thani',
        NameTH: 'อุทัยธานี',
        id: 48,
        isChecked: false,
      },
      {
        NameEN: 'Kamphaeng Phet',
        NameTH: 'กำแพงเพชร',
        id: 49,
        isChecked: false,
      },
      {
        NameEN: 'Sukhothai',
        NameTH: 'สุโขทัย',
        id: 51,
        isChecked: false,
      },
      {
        NameEN: 'Phitsanulok',
        NameTH: 'พิษณุโลก',
        id: 52,
        isChecked: false,
      },
      {
        NameEN: 'Phichit',
        NameTH: 'พิจิตร',
        id: 53,
        isChecked: false,
      },
      {
        NameEN: 'Phetchabun',
        NameTH: 'เพชรบูรณ์',
        id: 54,
        isChecked: false,
      },
      {
        NameEN: 'Suphan Buri',
        NameTH: 'สุพรรณบุรี',
        id: 57,
        isChecked: false,
      },
      {
        NameEN: 'Nakhon Pathom',
        NameTH: 'นครปฐม',
        id: 58,
        isChecked: false,
      },
      {
        NameEN: 'Samut Sakhon',
        NameTH: 'สมุทรสาคร',
        id: 59,
        isChecked: false,
      },
      {
        NameEN: 'Samut Songkhram',
        NameTH: 'สมุทรสงคราม',
        id: 60,
        isChecked: false,
      },
    ],
  },
  {
    region: 'North-East',
    selectAll: false,
    id: 3,
    provinces: [
      {
        NameEN: 'Nakhon Ratchasima',
        NameTH: 'นครราชสีมา',
        id: 19,
        isChecked: false,
      },
      {
        NameEN: 'Buri Ram',
        NameTH: 'บุรีรัมย์',
        id: 20,
        isChecked: false,
      },
      {
        NameEN: 'Surin',
        NameTH: 'สุรินทร์',
        id: 21,
        isChecked: false,
      },
      {
        NameEN: 'Si Sa Ket',
        NameTH: 'ศรีสะเกษ',
        id: 22,
        isChecked: false,
      },
      {
        NameEN: 'Ubon Ratchathani',
        NameTH: 'อุบลราชธานี',
        id: 23,
        isChecked: false,
      },
      {
        NameEN: 'Yasothon',
        NameTH: 'ยโสธร',
        id: 24,
        isChecked: false,
      },
      {
        NameEN: 'Chaiyaphum',
        NameTH: 'ชัยภูมิ',
        id: 25,
        isChecked: false,
      },
      {
        NameEN: 'Amnat Charoen',
        NameTH: 'อำนาจเจริญ',
        id: 26,
        isChecked: false,
      },
      {
        NameEN: 'Nong Bua Lam Phu',
        NameTH: 'หนองบัวลำภู',
        id: 27,
        isChecked: false,
      },
      {
        NameEN: 'Khon Kaen',
        NameTH: 'ขอนแก่น',
        id: 28,
        isChecked: false,
      },
      {
        NameEN: 'Udon Thani',
        NameTH: 'อุดรธานี',
        id: 29,
        isChecked: false,
      },
      {
        NameEN: 'Loei',
        NameTH: 'เลย',
        id: 30,
        isChecked: false,
      },
      {
        NameEN: 'Nong Khai',
        NameTH: 'หนองคาย',
        id: 31,
        isChecked: false,
      },
      {
        NameEN: 'Maha Sarakham',
        NameTH: 'มหาสารคาม',
        id: 32,
        isChecked: false,
      },
      {
        NameEN: 'Roi Et',
        NameTH: 'ร้อยเอ็ด',
        id: 33,
        isChecked: false,
      },
      {
        NameEN: 'Kalasin',
        NameTH: 'กาฬสินธุ์',
        id: 34,
        isChecked: false,
      },
      {
        NameEN: 'Sakon Nakhon',
        NameTH: 'สกลนคร',
        id: 35,
        isChecked: false,
      },
      {
        NameEN: 'Nakhon Phanom',
        NameTH: 'นครพนม',
        id: 36,
        isChecked: false,
      },
      {
        NameEN: 'Mukdahan',
        NameTH: 'มุกดาหาร',
        id: 37,
        isChecked: false,
      },
      {
        NameEN: 'buogkan',
        NameTH: 'บึงกาฬ',
        id: 77,
        isChecked: false,
      },
    ],
  },
  {
    region: 'West',
    selectAll: false,
    id: 4,
    provinces: [
      {
        NameEN: 'Tak',
        NameTH: 'ตาก',
        id: 50,
        isChecked: false,
      },
      {
        NameEN: 'Ratchaburi',
        NameTH: 'ราชบุรี',
        id: 55,
        isChecked: false,
      },
      {
        NameEN: 'Kanchanaburi',
        NameTH: 'กาญจนบุรี',
        id: 56,
        isChecked: false,
      },
      {
        NameEN: 'Phetchaburi',
        NameTH: 'เพชรบุรี',
        id: 61,
        isChecked: false,
      },
      {
        NameEN: 'Prachuap Khiri Khan',
        NameTH: 'ประจวบคีรีขันธ์',
        id: 62,
        isChecked: false,
      },
    ],
  },
  {
    region: 'East',
    selectAll: false,
    id: 5,
    provinces: [
      {
        NameEN: 'Chon Buri',
        NameTH: 'ชลบุรี',
        id: 11,
        isChecked: false,
      },
      {
        NameEN: 'Rayong',
        NameTH: 'ระยอง',
        id: 12,
        isChecked: false,
      },
      {
        NameEN: 'Chanthaburi',
        NameTH: 'จันทบุรี',
        id: 13,
        isChecked: false,
      },
      {
        NameEN: 'Trat',
        NameTH: 'ตราด',
        id: 14,
        isChecked: false,
      },
      {
        NameEN: 'Chachoengsao',
        NameTH: 'ฉะเชิงเทรา',
        id: 15,
        isChecked: false,
      },
      {
        NameEN: 'Prachin Buri',
        NameTH: 'ปราจีนบุรี',
        id: 16,
        isChecked: false,
      },
      {
        NameEN: 'Sa Kaeo',
        NameTH: 'สระแก้ว',
        id: 18,
        isChecked: false,
      },
    ],
  },
  {
    region: 'South',
    selectAll: false,
    id: 6,
    provinces: [
      {
        NameEN: 'Nakhon Si Thammarat',
        NameTH: 'นครศรีธรรมราช',
        id: 63,
        isChecked: false,
      },
      {
        NameEN: 'Krabi',
        NameTH: 'กระบี่',
        id: 64,
        isChecked: false,
      },
      {
        NameEN: 'Phangnga',
        NameTH: 'พังงา',
        id: 65,
        isChecked: false,
      },
      {
        NameEN: 'Phuket',
        NameTH: 'ภูเก็ต',
        id: 66,
        isChecked: false,
      },
      {
        NameEN: 'Surat Thani',
        NameTH: 'สุราษฎร์ธานี',
        id: 67,
        isChecked: false,
      },
      {
        NameEN: 'Ranong',
        NameTH: 'ระนอง',
        id: 68,
        isChecked: false,
      },
      {
        NameEN: 'Chumphon',
        NameTH: 'ชุมพร',
        id: 69,
        isChecked: false,
      },
      {
        NameEN: 'Songkhla',
        NameTH: 'สงขลา',
        id: 70,
        isChecked: false,
      },
      {
        NameEN: 'Satun',
        NameTH: 'สตูล',
        id: 71,
        isChecked: false,
      },
      {
        NameEN: 'Trang',
        NameTH: 'ตรัง',
        id: 72,
        isChecked: false,
      },
      {
        NameEN: 'Phatthalung',
        NameTH: 'พัทลุง',
        id: 73,
        isChecked: false,
      },
      {
        NameEN: 'Pattani',
        NameTH: 'ปัตตานี',
        id: 74,
        isChecked: false,
      },
      {
        NameEN: 'Yala',
        NameTH: 'ยะลา',
        id: 75,
        isChecked: false,
      },
      {
        NameEN: 'Narathiwat',
        NameTH: 'นราธิวาส',
        id: 76,
        isChecked: false,
      },
    ],
  },
];

export default provincesInThailand;
