"use server";
import prisma from "@/db";

export async function insertAllMuridData() {
  return await prisma.murid.createMany({
    data: [
      {
        namaIndo: "Abdullah Fabanyo",
        namaArab: "عبد الله فبانيو",
        kelas: "Abdullah",
        id: 23240404,
      },
      {
        namaIndo: "Affan Muadz Alfarisi",
        namaArab: "عفان معاذ الفارسي",
        kelas: "Abdullah",
        id: 23240381,
      },
      {
        namaIndo: "Ahmad Syafi'I Ali Naja",
        namaArab: "أحمد شافعي علي نجا",
        kelas: "Abdullah",
        id: 23240382,
      },
      {
        namaIndo: "Aksara Disastra Aidirahman",
        namaArab: "أكسارا ديساسترا أيدي رحمن",
        kelas: "Abdullah",
        id: 23240384,
      },
      {
        namaIndo: "Ammar Zuhdi Ramadhan",
        namaArab: "عمار زهدي رمضان",
        kelas: "Abdullah",
        id: 23240405,
      },
      {
        namaIndo: "Azhar Muwaffaq Rasyid",
        namaArab: "أزهر موفق رشيد",
        kelas: "Abdullah",
        id: 23240406,
      },
      {
        namaIndo: "Fahrezi Azka Ghifari",
        namaArab: "فحرازي أزكى غفاري ",
        kelas: "Abdullah",
        id: 23240390,
      },
      {
        namaIndo: "Fatih Tsabit Fadhlurrohman",
        namaArab: "فاتح ثابت فضل الرحمن",
        kelas: "Abdullah",
        id: 23240391,
      },
      {
        namaIndo: "Ghifarino Axl Luqman Adiguna",
        namaArab: "غيفارنو أكسيل لقمان أديغونا",
        kelas: "Abdullah",
        id: 23240413,
      },
      {
        namaIndo: "Hadfiy Zahid El Kayyis",
        namaArab: "هدفي زاهد الكيس",
        kelas: "Abdullah",
        id: 23240393,
      },
      {
        namaIndo: "Hafy Ibrahim Alafa",
        namaArab: "هافي ابراهيم آلافا",
        kelas: "Abdullah",
        id: 23240394,
      },
      {
        namaIndo: "Muhammad Al Rafif Santoso",
        namaArab: "محمد الررفيف سانتوسو",
        kelas: "Abdullah",
        id: 23240395,
      },
      {
        namaIndo: "Muhammad Ali Zubair",
        namaArab: "محمدعلي زبير",
        kelas: "Abdullah",
        id: 23240408,
      },
      {
        namaIndo: "Muhammad Fatih Abqori",
        namaArab: "محمد فاتح عبقري",
        kelas: "Abdullah",
        id: 23240414,
      },
      {
        namaIndo: "Muhammad Hanif Musyaffa",
        namaArab: "محمد حنيف مشفى",
        kelas: "Abdullah",
        id: 23240397,
      },
      {
        namaIndo: "Muhammad Isrofil Islamadina",
        namaArab: "محمد إسرافيل إسلام دينا",
        kelas: "Abdullah",
        id: 23240398,
      },
      {
        namaIndo: "Muhammad Rafka Zafran",
        namaArab: "محمد رافكا زفران",
        kelas: "Abdullah",
        id: 23240399,
      },
      {
        namaIndo: "Muhammad Shalih Al Utsaimin",
        namaArab: "محمد صالح العثيمن",
        kelas: "Abdullah",
        id: 23240400,
      },
      {
        namaIndo: "Salman Alfarisi Araya",
        namaArab: "سلمان الفارسي آرايا",
        kelas: "Abdullah",
        id: 22230356,
      },
      {
        namaIndo: "Aisha Hamna",
        namaArab: "عائشة حمنى",
        kelas: "Aisyah",
        id: 23240383,
      },
      {
        namaIndo: "Annisa Ayu Setya",
        namaArab: "النساء آيو ساتيا",
        kelas: "Aisyah",
        id: 23240385,
      },
      {
        namaIndo: "Asiya Fahad Alamudy",
        namaArab: "أسية فهد العمودي",
        kelas: "Aisyah",
        id: 23240386,
      },
      {
        namaIndo: "Assyifa Qiana Furqon",
        namaArab: "الشفاء قيانا فرقان",
        kelas: "Aisyah",
        id: 23240415,
      },
      {
        namaIndo: "Astrid Sukma Artami",
        namaArab: "آستريد سوكما أرتامي",
        kelas: "Aisyah",
        id: 23240387,
      },
      {
        namaIndo: "Azkiya Nurul Qur'Ani",
        namaArab: "أذكياء نور القرآن",
        kelas: "Aisyah",
        id: 23240412,
      },
      {
        namaIndo: "Baiq Aisha Zahra Khalisa",
        namaArab: "بائق عائشة زهر خالصا",
        kelas: "Aisyah",
        id: 23240388,
      },
      {
        namaIndo: "Eirlys Zikra Bordyoga",
        namaArab: "أيرليس ذكرا بورديوغا",
        kelas: "Aisyah",
        id: 23240389,
      },
      {
        namaIndo: "Fildzah Janeeta Syarafana",
        namaArab: "فيلزة جانيتا شرفنا",
        kelas: "Aisyah",
        id: 23240392,
      },
      {
        namaIndo: "Kinara Zahsy Prawiradilaga",
        namaArab: "كينارا زحشي براويراديلاغا",
        kelas: "Aisyah",
        id: 23240407,
      },
      {
        namaIndo: "Mutiah Ayudia Inara",
        namaArab: "مطيعة آيوديا إينارا",
        kelas: "Aisyah",
        id: 23240416,
      },
      {
        namaIndo: "Naisya Zaina Rizqiana",
        namaArab: "نيشا زينا رزقنا",
        kelas: "Aisyah",
        id: 23240401,
      },
      {
        namaIndo: "Shanindya El-Qisthi",
        namaArab: "سانينديا القسطي",
        kelas: "Aisyah",
        id: 23240403,
      },
      {
        namaIndo: "Shabira Annisa Hamdani",
        namaArab: "صابرة النساء حمدان",
        kelas: "Aisyah",
        id: 23240417,
      },
      {
        namaIndo: "Adila Nisa Ardani",
        namaArab: "عادلة نساء أرداني",
        kelas: "Fathimah",
        id: 22230348,
      },
      {
        namaIndo: "Anandita Ratu Evelyn",
        namaArab: "أنانديتا راتو إيفلين",
        kelas: "Fathimah",
        id: 22230317,
      },
      {
        namaIndo: "Avicena Ceisya Asadel",
        namaArab: "فيتشينا تشيشا أساديل",
        kelas: "Fathimah",
        id: 22230319,
      },
      {
        namaIndo: "Bernice Mahreennisa Raqiyya",
        namaArab: "برنيش مهر النساء رقيا",
        kelas: "Fathimah",
        id: 22230367,
      },
      {
        namaIndo: "Jihan Makailah Fakhira Khusuf",
        namaArab: "جيهان مكايلة فخيرة خسوف",
        kelas: "Fathimah",
        id: 22230363,
      },
      {
        namaIndo: "Kalisya Armayra Muqaddar",
        namaArab: "كاليشا أرمايرا مقدر",
        kelas: "Fathimah",
        id: 22230351,
      },
      {
        namaIndo: "Nayyara Khairunnisa Hakim",
        namaArab: "نيارة خير النساء حكيم",
        kelas: "Fathimah",
        id: 22230355,
      },
      {
        namaIndo: "Raihana Izzatunnisa Marsya",
        namaArab: "ريحانة عزة النساء مارشا",
        kelas: "Fathimah",
        id: 22230366,
      },
      {
        namaIndo: "Adilla Nidaan Khofia",
        namaArab: "عادلة نداء خفيا",
        kelas: "Khadijah",
        id: 22230311,
      },
      {
        namaIndo: "Aisyah Alya Lathifa",
        namaArab: "عائشة علياء لطيفة",
        kelas: "Khadijah",
        id: 22230314,
      },
      {
        namaIndo: "Aisyah Rayya Almahyra",
        namaArab: "عائشة ريا المهيرة",
        kelas: "Khadijah",
        id: 22230315,
      },
      {
        namaIndo: "Alesha Khaira Dzakira",
        namaArab: "أليشا خيرا ذكيرا",
        kelas: "Khadijah",
        id: 22230316,
      },
      {
        namaIndo: "Aya Sofia Al-qudsiyyah",
        namaArab: "آيا صفية القدسية",
        kelas: "Khadijah",
        id: 22230362,
      },
      {
        namaIndo: "Gasha Mazaya",
        namaArab: " غاشا مزايا",
        kelas: "Khadijah",
        id: 22230325,
      },
      {
        namaIndo: "Kameela Queency Ramond",
        namaArab: "كميلا كوينتشي راموند",
        kelas: "Khadijah",
        id: 22230377,
      },
      {
        namaIndo: "Zahra Ashima Dinillah",
        namaArab: "زهرة عاصمة دين الله",
        kelas: "Khadijah",
        id: 22230340,
      },
      {
        namaIndo: "Abdurrahman Raid",
        namaArab: "عبد الرحمن رائد",
        kelas: "Ubay",
        id: 22230374,
      },
      {
        namaIndo: "Ahmad Aufa Abqory",
        namaArab: "أحمد أوفى عبقري",
        kelas: "Ubay",
        id: 22230312,
      },
      {
        namaIndo: "Andi Muhammad Ammar Athaya",
        namaArab: "أندي محمد عمار عطايا",
        kelas: "Ubay",
        id: 22230360,
      },
      {
        namaIndo: "Atha Muhammad Alfarazky",
        namaArab: "أتا محمد ألفاريزقي",
        kelas: "Ubay",
        id: 22230361,
      },
      {
        namaIndo: "Faizan Arasy Rasydan",
        namaArab: "فائزان عراسي راشدان",
        kelas: "Ubay",
        id: 22230323,
      },
      {
        namaIndo: "Faza Ibrahim Al Kafil",
        namaArab: "فازا إبراهيم الكافل",
        kelas: "Ubay",
        id: 22230324,
      },
      {
        namaIndo: "Gaza Abrar Alfathir",
        namaArab: "غزا أبرار الفاطر",
        kelas: "Ubay",
        id: 22230326,
      },
      {
        namaIndo: "Lingga Wijaksana Purawinata",
        namaArab: "لينجا ويجاكسانا بوراويناتا",
        kelas: "Ubay",
        id: 22230352,
      },
      {
        namaIndo: "Muhammad Ersalan Ambadar",
        namaArab: "محمد إرسلان أمبادر",
        kelas: "Ubay",
        id: 22230369,
      },
      {
        namaIndo: "Muhammad Thaariq Mardiyanto",
        namaArab: "محمد طارق مرديانتو",
        kelas: "Ubay",
        id: 22230354,
      },
      {
        namaIndo: "Rayi Raynala Zefa",
        namaArab: "راي رينالا زيفا",
        kelas: "Ubay",
        id: 22230336,
      },
      {
        namaIndo: "Zeit Pramudia Wijatmiko",
        namaArab: "زيت براموديا ويجاتميكو",
        kelas: "Ubay",
        id: 22230372,
      },
      {
        namaIndo: "Airlangga Agung Nurzaki",
        namaArab: "أيرلانجا أجونج نورزاكي",
        kelas: "Utsman",
        id: 22230313,
      },
      {
        namaIndo: "Arrasya Firas Alghifari",
        namaArab: "أراشا فراس الغفاري",
        kelas: "Utsman",
        id: 22230318,
      },
      {
        namaIndo: "Arshaka Uwais Al Qarni",
        namaArab: "أرشكا أويس القرني",
        kelas: "Utsman",
        id: 22230375,
      },
      {
        namaIndo: "Dzikri Khadafi Hamizan",
        namaArab: "ذكري القذافي حميزان",
        kelas: "Utsman",
        id: 22230322,
      },
      {
        namaIndo: "Gaza Al Qassam Amrullah",
        namaArab: "غزا القسام أمر الله",
        kelas: "Utsman",
        id: 22230327,
      },
      {
        namaIndo: "Ibrahim Assamy",
        namaArab: "إبراهيم السامي",
        kelas: "Utsman",
        id: 22230328,
      },
      {
        namaIndo: "Muhammad Atharrazka Alfatih",
        namaArab: "محمد أتارازكا الفاتح",
        kelas: "Utsman",
        id: 22230331,
      },
      {
        namaIndo: "Muhammad Fauzan Karim",
        namaArab: "محمد فزان كريم",
        kelas: "Utsman",
        id: 22230368,
      },
      {
        namaIndo: "Muhammad Mikail Islamadina",
        namaArab: "محمد ميكائيل إسلامادينا",
        kelas: "Utsman",
        id: 22230353,
      },
      {
        namaIndo: "Muhammad Shiddiq Aulia",
        namaArab: "محمد صديق أولياء",
        kelas: "Utsman",
        id: 22230365,
      },
      {
        namaIndo: "Muhammad Zhafran Abdad",
        namaArab: "محمد ظفران عبداد",
        kelas: "Utsman",
        id: 22230333,
      },
      {
        namaIndo: "Salman Shalahuddin Muhammad",
        namaArab: "سلمان صلاح الدين محمد",
        kelas: "Utsman",
        id: 22230337,
      },
      {
        namaIndo: "Akmal Afnan Hakim",
        namaArab: "أكمال أفنان حكيم",
        kelas: "Abu Bakr",
        id: 21220250,
      },
      {
        namaIndo: "Barra Haidar",
        namaArab: "براء حيدر",
        kelas: "Abu Bakr",
        id: 21220281,
      },
      {
        namaIndo: "Darris Alibani Safar",
        kelas: "Abu Bakr",
        id: 21220260,
      },
      {
        namaIndo: "Hanif Ghazali Alafa",
        kelas: "Abu Bakr",
        id: 21220269,
      },
      {
        namaIndo: "Maliq Aliyandro Ramond",
        kelas: "Abu Bakr",
        id: 22230376,
      },
      {
        namaIndo: "Muhammad Asad Al-faqih",
        kelas: "Abu Bakr",
        id: 21220277,
      },
      {
        namaIndo: "Muhammad Raef Bathlathun El Bashil",
        kelas: "Abu Bakr",
        id: 21220279,
      },
      {
        namaIndo: "Muhammad Uwais Abdurrahman",
        kelas: "Abu Bakr",
        id: 21220282,
      },
      {
        namaIndo: "Reinanda Hamizan Adinata",
        kelas: "Abu Bakr",
        id: 21220289,
      },
      {
        namaIndo: "Sufyan Ats-tsauri",
        kelas: "Abu Bakr",
        id: 21220292,
      },
      {
        namaIndo: "Tristiyan Abiy Pratama",
        kelas: "Abu Bakr",
        id: 21220294,
      },
      {
        namaIndo: "Abrar Osama Gareeba",
        namaArab: "أبرار أسامة غريبة",
        kelas: "Shafiyyah",
        id: 21220265,
      },
      {
        namaIndo: "Adzkia Hasna Sakhi",
        namaArab: "أزكياء حسناء ساخي",
        kelas: "Shafiyyah",
        id: 21220246,
      },
      {
        namaIndo: "Aisyah Khanza Putrialifya",
        namaArab: "عائشة خنزاء بوترياليفيا",
        kelas: "Shafiyyah",
        id: 21220248,
      },
      {
        namaIndo: "Alika Zaviera Sava",
        namaArab: " أليكا زافيرا شافا",
        kelas: "Shafiyyah",
        id: 21220252,
      },
      {
        namaIndo: "Assyabiya Rafifa Santoso",
        namaArab: "آشبيا رفيفة سانتوسو",
        kelas: "Shafiyyah",
        id: 21220254,
      },
      {
        namaIndo: "Azumi Isaura Hanza",
        namaArab: "أزومي إساورا حنزاء",
        kelas: "Shafiyyah",
        id: 21220257,
      },
      {
        namaIndo: "Fatiha Shea Majid",
        namaArab: "فاتحة شيه مجيد",
        kelas: "Shafiyyah",
        id: 21220264,
      },
      {
        namaIndo: "Gemmarosa Larasati",
        namaArab: "جيماروسا لاراساتي",
        kelas: "Shafiyyah",
        id: 21220266,
      },
      {
        namaIndo: "Khodijah At-thohiroh Maqbul",
        namaArab: "خديجة الطاهرة مقبول ",
        kelas: "Shafiyyah",
        id: 21220272,
      },
      {
        namaIndo: "Maritza Davina Aretha",
        namaArab: "مريتزا دافينا أريثا",
        kelas: "Shafiyyah",
        id: 21220275,
      },
      {
        namaIndo: "Nadya Alimah",
        namaArab: "نادية عالمة",
        kelas: "Shafiyyah",
        id: 21220283,
      },
      {
        namaIndo: "Qathrunnada Earlyta Arsyfa",
        namaArab: "قطر الندى ايرليتا أرسيفا",
        kelas: "Shafiyyah",
        id: 21220286,
      },
      {
        namaIndo: "Qianna Qalesya Afsheena",
        namaArab: "كيانا كاليسيا أفشينا",
        kelas: "Shafiyyah",
        id: 21220287,
      },
      {
        namaIndo: "Syazwina Uzma Eryna",
        namaArab: "سازوينا أوزما إيرينا",
        kelas: "Shafiyyah",
        id: 21220293,
      },
      {
        namaIndo: "Zainab Al Muyassarah",
        namaArab: "زينب الميسرة",
        kelas: "Shafiyyah",
        id: 21220296,
      },
      {
        namaIndo: "Agha Assyauqi Ramdhani",
        kelas: "Umar",
        id: 20210202,
      },
      {
        namaIndo: "Althaf Al Fatih Ramadhan",
        kelas: "Umar",
        id: 21220298,
      },
      {
        namaIndo: "Aufaa Yuta Daniswara",
        kelas: "Umar",
        id: 21220255,
      },
      {
        namaIndo: "Ayyash Shubhi Abdul Latif",
        kelas: "Umar",
        id: 21220299,
      },
      {
        namaIndo: "Bilal Al Fatih",
        kelas: "Umar",
        id: 21220258,
      },
      {
        namaIndo: "Fakhri Faidhan Zahran",
        kelas: "Umar",
        id: 21220262,
      },
      {
        namaIndo: "Fatih Mufid Widyanto",
        kelas: "Umar",
        id: 21220263,
      },
      {
        namaIndo: "Hajjaj Hisyam Alhindawi",
        kelas: "Umar",
        id: 21220268,
      },
      {
        namaIndo: "Lalu Muhammad Omar Ramadhan",
        kelas: "Umar",
        id: 21220273,
      },
      {
        namaIndo: "Muhammad Razzan Abhimanyu Prasetiyo",
        kelas: "Umar",
        id: 21220280,
      },
      {
        namaIndo: "Safaraz Alfatih",
        kelas: "Umar",
        id: 21220290,
      },
      {
        namaIndo: "Aisha Thurayya Rizkiamira",
        namaArab: " عائشة ثريا ريزكياميرا",
        kelas: "Zainab",
        id: 21220247,
      },
      {
        namaIndo: "Aisyah Ulinnuha",
        namaArab: "عائشة أولي النهى",
        kelas: "Zainab",
        id: 21220249,
      },
      {
        namaIndo: "Alexandria Al Khansa",
        namaArab: "أليكسندريا الخنساء",
        kelas: "Zainab",
        id: 21220251,
      },
      {
        namaIndo: "Annisa Faiha",
        namaArab: "النساء فيحاء",
        kelas: "Zainab",
        id: 21220253,
      },
      {
        namaIndo: "Btari Devania Sarjono",
        namaArab: "بتاري ديفانيا سارجونو",
        kelas: "zainab",
        id: 21220259,
      },
      {
        namaIndo: "Eleanor Bryna Salsabila",
        namaArab: "اليانور برينا سلسبيلا",
        kelas: "zainab",
        id: 21220261,
      },
      {
        namaIndo: "Hayfa Atthahira Malay",
        namaArab: "هيفاء الطاهرة مالاي",
        kelas: "zainab",
        id: 21220270,
      },
      {
        namaIndo: "Khadega Waleed Obaid Adam Hamna",
        namaArab: "خديجة وليد ",
        kelas: "zainab",
        id: 22230417,
      },
      {
        namaIndo: "Khansameyya Sydney Manggala",
        namaArab: "خنساميا سيدني مانجالا",
        kelas: "zainab",
        id: 21220271,
      },
      {
        namaIndo: "Malika Misha Hanania",
        namaArab: " مليكة ميشا هنانيا",
        kelas: "zainab",
        id: 21220274,
      },
      {
        namaIndo: "Meisya Kamila Amini",
        namaArab: "ميشا كاميلا أميني",
        kelas: "zainab",
        id: 21220276,
      },
      {
        namaIndo: "Najwa Az Zahra",
        namaArab: "نجوى الزهرة",
        kelas: "zainab",
        id: 21220284,
      },
      {
        namaIndo: "Nayla Hanania Fahida",
        namaArab: "نيلا هنانيا فهيدة",
        kelas: "zainab",
        id: 21220285,
      },
      {
        namaIndo: "Shafiyyah Syarif",
        namaArab: "صفية شريف     ",
        kelas: "Zainab",
        id: 21220291,
      },
      {
        namaIndo: "Zahidatul Husna Zuljazmy Syafie",
        namaArab: "زهيدة الحسنى زولجسمي شافي ",
        kelas: "Zainab",
        id: 21220295,
      },
      {
        namaIndo: "Athalla Zain Al Khalifi",
        kelas: "Ali",
        id: 20210206,
      },
      {
        namaIndo: "Faaza Muhammad Fath",
        kelas: "Ali",
        id: 20210213,
      },
      {
        namaIndo: "Kenzio Atalarik Radjawane",
        kelas: "Ali",
        id: 20210219,
      },
      {
        namaIndo: "Muhammad Arshavin Muqaddar",
        kelas: "Ali",
        id: 20210225,
      },
      {
        namaIndo: "Muhammad Azka Hawnan Al Asyraf",
        kelas: "Ali",
        id: 20210226,
      },
      {
        namaIndo: "Muhammad Husni Mubarok",
        kelas: "Ali",
        id: 20210229,
      },
      {
        namaIndo: "Muhammad Muazzam Muslim",
        kelas: "Ali",
        id: 20210230,
      },
      {
        namaIndo: "Muhammad Rafa Hisyam Prakosa",
        kelas: "Ali",
        id: 20210232,
      },
      {
        namaIndo: "Muhammad Satria Anjanah",
        kelas: "Ali",
        id: 20210233,
      },
      {
        namaIndo: "Ashilla Nawal Sakhi",
        namaArab: "أسيلا نوال ساخي",
        kelas: "Ruqayyah",
        id: 20210205,
      },
      {
        namaIndo: "Athaya Malika Putri",
        namaArab: "أتايا مالكة فوتري",
        kelas: "Ruqayyah",
        id: 20210207,
      },
      {
        namaIndo: "Hilwa Nadhifa El Fahmi",
        namaArab: "حلوى نظيفة الفهمي",
        kelas: "Ruqayyah",
        id: 20210216,
      },
      {
        namaIndo: "Kanaya Raihanan Herbanu",
        namaArab: "كنايا ريحانان هيربانو",
        kelas: "Ruqayyah",
        id: 20210218,
      },
      {
        namaIndo: "Khodijah Hasna",
        namaArab: "خديجة حسنى",
        kelas: "Ruqayyah",
        id: 20210220,
      },
      {
        namaIndo: "Manaar Mohammed Hussein Al Gailani",
        namaArab: "منار محمد الجيلاني",
        kelas: "Ruqayyah",
        id: 22230379,
      },
      {
        namaIndo: "Nayfa Aqila Nurdiawan",
        namaArab: "نايفة عاقلة نوردياوان",
        kelas: "Ruqayyah",
        id: 20210235,
      },
      {
        namaIndo: "Nazwa Ghaziya El Syahida",
        namaArab: "نزوى غازية الشهيدة",
        kelas: "Ruqayyah",
        id: 20210236,
      },
      {
        namaIndo: "Raihanna Jasmine Pinkan",
        namaArab: "ريحانة جاسمين بينكان",
        kelas: "Ruqayyah",
        id: 20210237,
      },
      {
        namaIndo: "Shazia Aisyah Ilvi",
        namaArab: "شازيا عائشة إلفي",
        kelas: "Ruqayyah",
        id: 20210239,
      },
      {
        namaIndo: "Syarifah Sarah",
        namaArab: "شريفة سارة",
        kelas: "Ruqayyah",
        id: 19200240,
      },
      {
        namaIndo: "Abdurrohman Hanif Subhan",
        kelas: "Sa'ad",
        id: 20210197,
      },
      {
        namaIndo: "Adam Al Ruzain",
        kelas: "Sa'ad",
        id: 20210198,
      },
      {
        namaIndo: "Aditya Naufal Zaenaldi",
        kelas: "Sa'ad",
        id: 20210200,
      },
      {
        namaIndo: "Alkhalifi Ammar Kuncoro",
        kelas: "Sa'ad",
        id: 20210203,
      },
      {
        namaIndo: "Athaya Zain Al Ghazali",
        kelas: "Sa'ad",
        id: 20210208,
      },
      {
        namaIndo: "Muhammad Abid Affan Sinaga",
        kelas: "Sa'ad",
        id: 20210222,
      },
      {
        namaIndo: "Muhammad Al Fatih Mardiyanto",
        kelas: "Sa'ad",
        id: 20210224,
      },
      {
        namaIndo: "Muhammad Azzam Al Fatih",
        kelas: "Sa'ad",
        id: 20210227,
      },
      {
        namaIndo: "Muhammad Nashiruddin Al Hafidzh",
        kelas: "Sa'ad",
        id: 20210231,
      },
      {
        namaIndo: "Yazid Lutfi Ibrahim",
        kelas: "Sa'ad",
        id: 20210242,
      },
      {
        namaIndo: "Adeeba Mahira Byhaqi",
        namaArab: "أديبة ماهرة بيهقي",
        kelas: "Ummu Kultsum",
        id: 20210199,
      },
      {
        namaIndo: "Ardini Namiah Kirana",
        namaArab: "أرديني نامية كرانا",
        kelas: "Ummu Kultsum",
        id: 20210204,
      },
      {
        namaIndo: "Auliya Izza Tunnisa",
        namaArab: "أولياء عزة تونيسا",
        kelas: "Ummu Kultsum",
        id: 20210209,
      },
      {
        namaIndo: "Ayu Raline Adzkia",
        namaArab: "أيو رالين أذكياء",
        kelas: "Ummu Kultsum",
        id: 20210210,
      },
      {
        namaIndo: "Dzafira Naila Abidah",
        namaArab: "ظفيرة نائلة عابدة",
        kelas: "Ummu Kultsum",
        id: 20210212,
      },
      {
        namaIndo: "Gaida Hasna Syarif",
        namaArab: "غيداء حسناء شريف",
        kelas: "Ummu Kultsum",
        id: 20210214,
      },
      {
        namaIndo: "Hanina Nida Ma'wa",
        namaArab: "حنين نداء مأوى",
        kelas: "Ummu Kultsum",
        id: 20210215,
      },
      {
        namaIndo: "Mazaya Adhwa Asyura",
        namaArab: "مزايا أضواء عاشوراء",
        kelas: "Ummu Kultsum",
        id: 20210221,
      },
      {
        namaIndo: "Nadia Agung Nurfadilah",
        namaArab: "نديا أغونج نور فضيلة",
        kelas: "Ummu Kultsum",
        id: 20210234,
      },
      {
        namaIndo: "Tutupolij Nadhaqila Aliyya Zahra",
        namaArab: "توتوبوليج ناداقيلا عالية زهراء",
        kelas: "Ummu Kultsum",
        id: 20210241,
      },
      {
        namaIndo: "Aisha Almahyra Nicky",
        namaArab: "عائشة الماهرة نيكي",
        kelas: "Maimunah",
        id: 19200154,
      },
      {
        namaIndo: "Aisyah Jelita Permatasari",
        namaArab: "عائشة جيليتا برماتاساري",
        kelas: "Maimunah",
        id: 18190140,
      },
      {
        namaIndo: "Ghaziyah Tsabita Assyarif",
        namaArab: "غازية ثابتة الشريف",
        kelas: "Maimunah",
        id: 19200165,
      },
      {
        namaIndo: "Haninda Indraini",
        namaArab: "حنيندا إندريني",
        kelas: "Maimunah",
        id: 19200167,
      },
      {
        namaIndo: "Khansa Rizq Khairunnisa",
        namaArab: "خنسا رزق خير النساء",
        kelas: "Maimunah",
        id: 19200171,
      },
      {
        namaIndo: "Rayya Rufaidah",
        namaArab: "رايا رفيدة ",
        kelas: "Maimunah",
        id: 19200183,
      },
      {
        namaIndo: "Tasika Kinza Iskandar",
        namaArab: "تاسيكا كينزا إسكندر",
        kelas: "Maimunah",
        id: 19200186,
      },
      {
        namaIndo: "Zhafiraah Akhayla Edgina Putri",
        namaArab: "زفيرة أكيلى بوتري",
        kelas: "Maimunah",
        id: 19200188,
      },
      {
        namaIndo: "Zia Aqeela",
        namaArab: "زياء عاقلة",
        kelas: "Maimunah",
        id: 19200190,
      },
      {
        namaIndo: "Afiqah Humairah Putrizaliyah",
        namaArab: "عفيقة حميراء بوتريزالية",
        kelas: "Maryam",
        id: 19200150,
      },
      {
        namaIndo: "Afiqah Raihana Syuwanda",
        namaArab: "عفيقة ريحانة شوندى",
        kelas: "Maryam",
        id: 19200151,
      },
      {
        namaIndo: "Aina Al Mardhiyah",
        namaArab: "عيناء المرضية",
        kelas: "Maryam",
        id: 19200153,
      },
      {
        namaIndo: "Aisha Mikhayla Azzahra",
        namaArab: "عائشة ميكيلا الزهرة",
        kelas: "Maryam",
        id: 19200155,
      },
      {
        namaIndo: "Farah Nadiyya Adam",
        namaArab: "فرح ناديا آدم  ",
        kelas: "Maryam",
        id: 19200161,
      },
      {
        namaIndo: "Fathizza Madina Alzena",
        namaArab: "فاتزّا مدينا ألزينا",
        kelas: "Maryam",
        id: 19200162,
      },
      {
        namaIndo: "Fayza Qairina Uzma",
        namaArab: "فائزة قيرنا عزمى",
        kelas: "Maryam",
        id: 19200164,
      },
      {
        namaIndo: "Hafsa Moira Ghani",
        namaArab: "حفصة مويرا غاني",
        kelas: "Maryam",
        id: 19200169,
      },
      {
        namaIndo: "Mikayla Darena Aneeqa",
        namaArab: "ميكيلا درينا أنيقة",
        kelas: "Maryam",
        id: 19200174,
      },
      {
        namaIndo: "Nada Izzati El Islami",
        namaArab: "ندى عزتي الإسلامي",
        kelas: "Maryam",
        id: 19200182,
      },
      {
        namaIndo: "Adzikro Genio Putra Wicaksono",
        kelas: "Thalhah",
        id: 19200149,
      },
      {
        namaIndo: "Ahmad Alwan Ayyasy",
        kelas: "Thalhah",
        id: 19200152,
      },
      {
        namaIndo: "Bryan Alvaro Eshan Lim",
        kelas: "Thalhah",
        id: 19200157,
      },
      {
        namaIndo: "Dawud Muhammad Fawwaz",
        kelas: "Thalhah",
        id: 19200159,
      },
      {
        namaIndo: "Fatih Rahman Karim",
        kelas: "Thalhah",
        id: 19200163,
      },
      {
        namaIndo: "Khaled Waleed Obaid Adam Hamna",
        kelas: "Thalhah",
        id: 22230416,
      },
      {
        namaIndo: "Muhammad Alzam Hafiz Masykuri",
        kelas: "Thalhah",
        id: 19200175,
      },
      {
        namaIndo: "Muhammad Ghailan Althaf",
        kelas: "Thalhah",
        id: 19200177,
      },
      {
        namaIndo: "Muhammad Ghifari Ar Rashdan",
        kelas: "Thalhah",
        id: 19200178,
      },
      {
        namaIndo: "Wafi Abiyu Ard Suryanto",
        kelas: "Thalhah",
        id: 19200187,
      },
      {
        namaIndo: "Abdurrahman Hafeez Amini",
        kelas: "Zubair",
        id: 19200147,
      },
      {
        namaIndo: "Abiyya Sonofaira Abdurrauf",
        kelas: "Zubair",
        id: 19200148,
      },
      {
        namaIndo: "Azka Naufal Ramadhan",
        kelas: "Zubair",
        id: 19200191,
      },
      {
        namaIndo: "Dzikra Raif Ghanim",
        kelas: "Zubair",
        id: 19200160,
      },
      {
        namaIndo: "Ibrahim Rumi Aditya",
        kelas: "Zubair",
        id: 19200168,
      },
      {
        namaIndo: "Keenan Nakhla Adinata",
        kelas: "Zubair",
        id: 19200170,
      },
      {
        namaIndo: "Muhammad Faqihuddin Pallawagau Zuljazmy S.",
        kelas: "Zubair",
        id: 19200172,
      },
      {
        namaIndo: "Muhammad Firzan Keandra Hendri",
        kelas: "Zubair",
        id: 19200176,
      },
      {
        namaIndo: "Rayyan Akmalzaky Inada",
        kelas: "Zubair",
        id: 19200184,
      },
      {
        namaIndo: "Riza Dwiputra Fahrizi",
        kelas: "Zubair",
        id: 19200185,
      },
      {
        namaIndo: "Afnan Osama Mohammad Gareba",
        namaArab: "أفنان أسامة محمد غريبة",
        kelas: "Asma'",
        id: 19200192,
      },
      {
        namaIndo: "Ahira Filza Mumtaza",
        namaArab: "أهيرا فيليزا ممتازة",
        kelas: "Asma'",
        id: 18190132,
      },
      {
        namaIndo: "Aisyah Fahad Alamudy",
        namaArab: "عائشة فهد العمودي",
        kelas: "Asma'",
        id: 18190129,
      },
      {
        namaIndo: "Aisyah Juwita Permatasari",
        namaArab: "عائشة جويتا برماتا ساري",
        kelas: "Asma'",
        id: 18190139,
      },
      {
        namaIndo: "Alesya Ferilyan Buzaar",
        namaArab: "أليشا فريليان بُزار",
        kelas: "Asma'",
        id: 18190121,
      },
      {
        namaIndo: "Chesyl Aulia Akhmad",
        namaArab: "جيشيل أولياء أحمد",
        kelas: "Asma'",
        id: 18190113,
      },
      {
        namaIndo: "Fatimah Ayna Qolbi",
        namaArab: "فاطمة عين قلبي",
        kelas: "Asma'",
        id: 18190124,
      },
      {
        namaIndo: "Feliz Aneesa Fareza",
        namaArab: "فيليس أنيسا فاريزا",
        kelas: "Asma'",
        id: 18190109,
      },
      {
        namaIndo: "Keyla Sabiya Al Aura",
        namaArab: "كيلا سابيا العورى",
        kelas: "Asma'",
        id: 18190137,
      },
      {
        namaIndo: "Kiandra Ayla Fazia",
        namaArab: "كيندارا أيلا فازيا",
        kelas: "Asma'",
        id: 18190116,
      },
      {
        namaIndo: "Lathifah Syahmi",
        namaArab: "لطيفة شهمي",
        kelas: "Asma'",
        id: 18190143,
      },
      {
        namaIndo: "Mazaya Qanita",
        namaArab: "مزايا قانتة",
        kelas: "Asma'",
        id: 18190141,
      },
      {
        namaIndo: "Nadira Zahra Amini",
        namaArab: "ناضرة زهرى أميني",
        kelas: "Asma'",
        id: 18190111,
      },
      {
        namaIndo: "Nadria Mandalika",
        namaArab: "ندريا ماندالك",
        kelas: "Asma'",
        id: 18190136,
      },
      {
        namaIndo: "Naura Bilqis Ayesha",
        namaArab: "نَوْرا بلقس أييشا",
        kelas: "Asma'",
        id: 18190134,
      },
      {
        namaIndo: "Raisva Malika Putri",
        namaArab: "ريسْفا ماليكا بوتري",
        kelas: "Asma'",
        id: 18190120,
      },
      {
        namaIndo: "Rhanaya Azzahra Prasetiyo",
        namaArab: "رانايا الزهرة براستيو",
        kelas: "Asma'",
        id: 18190123,
      },
      {
        namaIndo: "Syarifah Najwa",
        namaArab: "شريفة نجوى",
        kelas: "Asma'",
        id: 18190106,
      },
      {
        namaIndo: "Ahmad Azzam Ash Shiddiq",
        namaArab: "أحمد عزام الصديق\r\n",
        kelas: "Muadz",
        id: 18190118,
      },
      {
        namaIndo: "Ala Haidar",
        namaArab: "علاء حيدر",
        kelas: "Muadz",
        id: 18190130,
      },
      {
        namaIndo: "Alifiandra Hafidz Thala",
        namaArab: "أليفياندرا حافظ تلا\r\n",
        kelas: "Muadz",
        id: 18190117,
      },
      {
        namaIndo: "Andi M Arafat Atharizz",
        namaArab: "أندي محمد عرفات التاريز",
        kelas: "Muadz",
        id: 18190115,
      },
      {
        namaIndo: "Darvish Reza Alfaiz",
        namaArab: "درفيش ريزا الفائز",
        kelas: "Muadz",
        id: 18190114,
      },
      {
        namaIndo: "Davaqeela Khalfanizza Yolando Putra",
        namaArab: "دفاقيلا كلفانزّا يولندو بوترا",
        kelas: "Muadz",
        id: 18190142,
      },
      {
        namaIndo: "Farel Prayata Admaja",
        namaArab: "فاريل بَراياتا أتماجا",
        kelas: "Muadz",
        id: 18190127,
      },
      {
        namaIndo: "Ibrahim Nesar Al Fathin",
        namaArab: "إبراهيم نيسار الفاطن\r\n",
        kelas: "Muadz",
        id: 18190110,
      },
      {
        namaIndo: "Ken Kaisan Ramadhani",
        namaArab: "كين كيسان رمضان\r\n",
        kelas: "Muadz",
        id: 18190131,
      },
      {
        namaIndo: "Muhammad Aryasa Zefa",
        namaArab: "محمد أرْياسا زيفا",
        kelas: "Muadz",
        id: 18190122,
      },
      {
        namaIndo: "Muhammad Ghazi Putra A",
        namaArab: "محمد غازي بوترا\r\n",
        kelas: "Muadz",
        id: 18190119,
      },
      {
        namaIndo: "Muhammad Ibadurohman Maqbul",
        namaArab: "محمد عباد الرحمن مقبول",
        kelas: "Muadz",
        id: 18190128,
      },
      {
        namaIndo: "Muhammad Rezvanda Zavier Adam",
        namaArab: "محمد ريزْفندا زافير آدم\r\n",
        kelas: "Muadz",
        id: 18190135,
      },
      {
        namaIndo: "Nur Hidayat Setiadi Putra",
        namaArab: "نور هدايات ستيادي بوترا",
        kelas: "Muadz",
        id: 18190112,
      },
      {
        namaIndo: "Rasyid Rafi Muhammad",
        namaArab: "رشيد رافي محمد",
        kelas: "Muadz",
        id: 18190126,
      },
      {
        namaIndo: "Sean Ibrahim Sattar El-kindy",
        namaArab: "سيان إبراهيم ستار الكندي",
        kelas: "Muadz",
        id: 18190125,
      },
      {
        namaIndo: "Aisyah Febby Sari Ramadhani",
        kelas: "Khansa'",
        id: 17180084,
      },
      {
        namaIndo: "Almira Mahrin Hafiza",
        kelas: "Khansa'",
        id: 17180082,
      },
      {
        namaIndo: "Indira Magali",
        kelas: "Khansa'",
        id: 17180073,
      },
      {
        namaIndo: "Najma Aqila Mahya",
        kelas: "Khansa'",
        id: 17180074,
      },
      {
        namaIndo: "Abdullah Farih Waffa",
        kelas: "Mush'ab",
        id: 17180066,
      },
      {
        namaIndo: "Bima Satria Hidayat",
        kelas: "Mush'ab",
        id: 17180094,
      },
      {
        namaIndo: "Farrel Athanny Abdurachman",
        kelas: "Mush'ab",
        id: 17180101,
      },
      {
        namaIndo: "El Azka Ghalibie",
        kelas: "Khalid",
        id: 22230359,
      },
      {
        namaIndo: "Mohammed Osama Mohammad Gareba",
        kelas: "Khalid",
        id: 19200193,
      },
      {
        namaIndo: "Nararya Haydar",
        kelas: "Khalid",
        id: 22230370,
      },
      {
        namaIndo: "Aleyya Mazaya Aditya",
        kelas: "Ummu Salamah",
        id: 16170044,
      },
      {
        namaIndo: "Alya Namara Putri Maulida",
        kelas: "Ummu Salamah",
        id: 22230341,
      },
      {
        namaIndo: "Balqis Syarifah Fathin",
        kelas: "Ummu Salamah",
        id: 16170033,
      },
      {
        namaIndo: "Mahasin Asiyah",
        kelas: "Ummu Salamah",
        id: 18190105,
      },
      {
        namaIndo: "Namiyah Ersalan Ambadar",
        kelas: "Ummu Salamah",
        id: 22230343,
      },
      {
        namaIndo: "Nasywa Aliyah Ilmi",
        kelas: "Ummu Salamah",
        id: 22230344,
      },
      {
        namaIndo: "Naura Hasna Salsabila Rahardjo",
        kelas: "Ummu Salamah",
        id: 22230345,
      },
      {
        namaIndo: "Rania Rahima Malay",
        kelas: "Ummu Salamah",
        id: 22230346,
      },
      {
        namaIndo: "Salis Sahla Aziza",
        kelas: "Ummu Salamah",
        id: 16170034,
      },
      {
        namaIndo: "Zalfa Nabila Putri Wicaksono",
        kelas: "Ummu Salamah",
        id: 22230347,
      },
      {
        namaIndo: "Abdullah Fahmi Baridwan",
        kelas: "Bilal",
        id: 15160012,
      },
      {
        namaIndo: "Abdullah Haidar",
        kelas: "Bilal",
        id: 15160023,
      },
      {
        namaIndo: "Alfath Raya Akwila",
        kelas: "Bilal",
        id: 21220301,
      },
      {
        namaIndo: "Bilal Sahnon",
        kelas: "Bilal",
        id: 21220303,
      },
      {
        namaIndo: "Darrio Aryabani Safar",
        kelas: "Bilal",
        id: 15160020,
      },
      {
        namaIndo: "Hayder Rahman Hatim",
        kelas: "Bilal",
        id: 15160017,
      },
      {
        namaIndo: "Rafif Safa Abiyu Abdurrauf",
        kelas: "Bilal",
        id: 21220306,
      },
      {
        namaIndo: "Syarif Abu Bakar Adeni Alqadrie",
        kelas: "Bilal",
        id: 21220309,
      },
      {
        namaIndo: "Al Madina Jasmine",
        kelas: "Sarah",
        id: 21220300,
      },
      {
        namaIndo: "Alifa Kineta Kanza",
        kelas: "Sarah",
        id: 21220302,
      },
      {
        namaIndo: "Berthlinale Mehrunnisa Radhiya",
        kelas: "Sarah",
        id: 22230378,
      },
      {
        namaIndo: "Joyce Ghanima Petriviena",
        kelas: "Sarah",
        id: 21220304,
      },
      {
        namaIndo: "Nabila Azka Hendari",
        kelas: "Sarah",
        id: 21220305,
      },
      {
        namaIndo: "Sawsan Hasna Aqila Ayesha",
        kelas: "Sarah",
        id: 21220307,
      },
      {
        namaIndo: "Shahira Kamilia Adani",
        kelas: "Sarah",
        id: 21220308,
      },
      {
        namaIndo: "Zharifah Zora Almira",
        kelas: "Sarah",
        id: 21220310,
      },
    ],
    skipDuplicates: true,
  });
}
