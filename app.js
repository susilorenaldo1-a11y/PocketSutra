const SUTRAS = {
  heart: {
    id: 'heart',
    short: 'Xin Jing',
    title: '般若波羅蜜多心經',
    titlePinyin: 'Bō Rě Bō Luó Mì Duō Xīn Jīng',
    titleMeaning: 'Sutra Hati Prajnaparamita',
    verses: [
      { h: '觀自在菩薩 行深般若波羅蜜多時', p: 'Guān Zì Zài Pú Sà, Xíng Shēn Bō Rě Bō Luó Mì Duō Shí', l: 'Kuan Ce Cai Phu Sa Sing Sen Po Re Po Lo Mi Tuo Se', m: 'Ketika Yang Mulia Bodhisattva Avalokitesvara mempraktikkan Prajna Paramita secara tekun dan mendalam.' },
      { h: '照見五蘊皆空 度一切苦厄 舍利子', p: 'Zhào Jiàn Wǔ Yùn Jiē Kōng, Dù Yī Qiè Kǔ è, Shè Lì Zǐ', l: 'Cao Cien Wu Yin Cie Khong, Tu Yi Cie Khu Ee, She Li Ce', m: 'Beliau mengerti secara hakiki bahwa panca skandha manusia senantiasa berubah. Dengan pencerahan demikian Beliau dapat mengatasi semua penderitaan. Oh, Sariputra!' },
      { h: '色不異空 空不異色 色即是空 空即是色', p: 'Sè Bù Yì Kōng, Kōng Bù Yì Sè, Sè Jí Shì Kōng, Kōng Jí Shì Sè', l: 'She Pu Yi Khong Khong Pu Yi She, She Ci Se Khong, Khong Ci She Se', m: 'Setiap benda/rupa adalah identik dengan sifat kesunyataan. Sebaliknya sifat kesunyataan ini identik dengan benda/rupa yang relevan dengannya. Semua benda/rupa adalah perwujudan dari sifat kesunyataan, sifat kesunyataan senantiasa menyertai benda/rupanya.' },
      { h: '受想行識 亦復如是 舍利子 是諸法空相', p: 'Shòu Xiǎng Xíng Shí, Yì Fù Rú Shì, Shè Lì Zǐ, Shì Zhū Fǎ Kōng Xiàng', l: 'Shou Siang Sing She, Yi Fu Ru She, She Li Ce, She Cu Fa Khong Siang', m: 'Demikian pula yang terjadi dengan vedana (perasaan), samjna (pikiran), samskara (karsa), dan vijnana (kesadaran). Oh, Sariputra! Kesunyataan dari seisi alam semesta' },
      { h: '不生不滅 不垢不淨 不增不減', p: 'Bù Shēng Bù Miè, Bù Gòu Bù Jìng, Bù Zēng Bù Jiǎn', l: 'Pu Sheng Pu Mie, Pu Kou Pu Cing, Pu Cen Pu Cien', m: 'adalah tiada kelahiran dan kematian, tiada pertentangan yang awam dan suci, tiada penambahan dan pengurangan dalam kondisi apa pun.' },
      { h: '是故空中無色 無受想行識', p: 'Shì Gù Kōng Zhōng Wú Sè, Wú Shòu Xiǎng Xíng Shí', l: 'She Ku Khong Cong Wu Se, Wu Shou Siang Sing She', m: 'Oleh karena itu, di dalam kesunyataan tiada perwujudan, tiada permainan perasaan, percerapan, tindakan, alam bawah kesadaran' },
      { h: '無眼耳鼻舌身意 無色聲香味觸法', p: 'Wú Yǎn ěr Bí Shé Shēn Yì, Wú Sè Shēng Xiāng Wèi Chù Fǎ', l: 'Wu Yen Erl Pi She Shen Yi, Wu Se Sheng Siang Wei Chu Fa', m: 'tiada godaan mata, telinga, hidung, lidah, jasmani, dan pikiran. Tiada terpikat oleh objek penglihatan, pendengaran, penciuman, cita rasa, sentuhan.' },
      { h: '無眼界 乃至無意識界', p: 'Wú Yǎn Jiè, Nǎi Zhì Wú Yì Shí Jiè', l: 'Wu Yen Cie, Nai Ce Wu Yi She Cie', m: 'Tiada batas pandangan, tiada batas alam bawah kesadaran.' },
      { h: '無無明 亦無無明盡 乃至無老死 亦無老死盡', p: 'Wú Wú Míng, Yì Wú Wú Míng Jìn, Nǎi Zhì Wú Lǎo Sǐ, Yì Wú Lǎo Sǐ Jìn', l: 'Wu Wu Ming Yi Wu Wu Ming Cin, Nai Ce Wu Lao Se, Yi Wu Lao Se Cin', m: 'Tiada avidya/kegelapan batin, tiada lenyapnya kegelapan batin, tiada usia tua dan kematian, sampai akhir dari usia tua dan kematian.' },
      { h: '無苦集滅道 無智亦無得', p: 'Wú Kǔ Jí Miè Dào, Wú Zhì Yì Wú Dé', l: 'Wu Khu Ci Mie Tao, Wu Ce Yi Wu Te', m: 'Tiada derita, asal mula derita, akhir derita, dan jalan pencerahan; tiada kebijaksanaan, tiada pencapaian.' },
      { h: '以無所得故 菩提薩埵 依般若波羅蜜多故', p: 'Yǐ Wú Suǒ Dé Gù, Pú Tí Sà Duǒ, Yī Bō Rě Bō Luó Mì Duō Gù', l: 'Yi Wu Suo Te Ku, Phu Thi Sa Tuo, Yi Po Re Po Luo Mi Tuo Ku', m: 'Sesungguhnya, tiada sesuatu yang dicapai, oleh karena pengertian ini, maka Sang Bodhisattva melatih dirinya mengikuti Prajna Paramita.' },
      { h: '心無罣礙 無罣礙故 無有恐怖 遠離顛倒夢想', p: 'Xīn Wú Guà ài, Wú Guà ài Gù, Wú Yǒu Kǒng Bù, Yuǎn Lí Diān Dǎo Mèng Xiǎng', l: 'Sin Wu Kua Ai, Wu Kua Ai Ku, Wu You Khong Pu, Yuen Li Tien Tao Meng Siang', m: 'Jika hati terbebas, tiada beban pikiran, maka tidak akan rasa ketakutan, menjauhi cara berpikir irasional atau berkhayalan' },
      { h: '究竟涅槃 三世諸佛 依般若波羅蜜多故', p: 'Jiū Jìng Niè Pán, Sān Shì Zhū Fó, Yī Bō Rě Bō Luó Mì Duō Gù', l: 'Ciu Cing Nie Phan, San She Cu Fo, Yi Po Re Po Luo Mie Tuo Ku', m: 'dan berakhir mencapai nirvana. Semua Hyang Buddha pada waktu dahulu, sekarang dan mendatang, karena telah mempraktikkan Prajna Paramita,' },
      { h: '得阿耨多羅三藐三菩提 故知般若波羅蜜多', p: 'Dé ā Nòu Duō Luó Sān Miǎo Sān Pú Tí, Gù Zhī Bō Rě Bō Luó Mì Duō', l: 'Te E Nou Tuo Luo San Miao San Phu Thi, Ku Ce Po Re Po Luo Mi Tuo', m: 'maka mencapai Anuttara Samyaksambuddha (pencerahan sempurna). Karena itu, Prajna Paramita sudah jelas merupakan maha mantra sakti,' },
      { h: '是大神咒 是大明咒 是無上咒 是無等等咒', p: 'Shì Dà Shén Zhòu, Shì Dà Míng Zhòu, Shì Wú Shàng Zhòu, Shì Wú Děng Děng Zhòu', l: 'She Ta Shen Cou, She Ta Ming Cou, She Wu Shang Cou, She Wu Teng Teng Cou', m: 'maha mantra pencerahan, mantra yang teragung, mantra tanpa bandingan' },
      { h: '能除一切苦 真實不虛 故說般若波羅蜜多咒', p: 'Néng Chú Yī Qiè Kǔ, Zhēn Shí Bù Xū, Gù Shuō Bō Rě Bō Luó Mì Duō Zhòu', l: 'Neng Chu Yi Chie Khu, Cen She Pu Sii, Ku Shuo Po Re Po Luo Mi Tuo Cou', m: 'yang dapat melenyapkan segala penderitaan; sungguh benar dan tidak palsu. Karenanya, mari kita melafal dan mengamalkan mantra Prajna Paramita' },
      { h: '即說咒曰 揭諦揭諦 波羅揭諦', p: 'Jí Shuō Zhòu Yuē, Jiē Dì Jiē Dì, Bō Luó Jiē Dì', l: 'Ci Shuo Cou Yue: Cie Ti Cie Ti, Po Luo Cie Ti', m: 'seperti ini; Pergilah pergilah, melewati semua dukkha,' },
      { h: '波羅僧揭諦 菩提薩婆訶', p: 'Bō Luó Sēng Jiē Dì, Pú Tí Sà Pó Hē', l: 'Po Luo Seng Cie Ti, Phu Thi Sa Pho He', m: 'bersama-sama menyeberangi mencapai pencerahan.' },
      { h: '般若波羅蜜多心經', p: 'Bō Rě Bō Luó Mì Duō Xīn Jīng', l: '', m: 'Sutra Hati Prajnaparamita.' }
    ]
  },
  mile: {
    id: 'mile',
    short: 'Mi Le',
    title: '彌勒救苦真經',
    titlePinyin: 'Mílè Jiù Kǔ Zhēn Jīng',
    titleMeaning: 'Sutra Keselamatan Maitreya',
    verses: [
      { h: '佛說彌勒救苦經', p: 'Fó Shuō Mí Lè Jiù Kǔ Jīng', l: 'Fo Shuo Mi Le Ciu Khu Cing', m: 'Buddha bersabda tentang kitab suci Maitreya.' },
      { h: '彌勒下世不非輕', p: 'Mí Lè Xià Shì Bù Fēi Qīng', l: 'Mi Le Sia She Pu Fei Ching', m: 'Maitreya lahir ke dunia bukanlah hal sepele.' },
      { h: '領寶齊魯靈山地', p: 'Lǐng Bǎo Qí Lǔ Líng Shān Dì', l: 'Ling Pao Chi Lu Ling Shan Ti', m: 'Di daerah Shan Tung (dahulu negri Chi dan lu) Maitreya menerima Firman Tuhan.' },
      { h: '拈花印證考三乘', p: 'Niān Huā Yìn Zhèng Kǎo Sān Chéng', l: 'Nien Hua In Ceng Khao San Sheng', m: 'Barang siapa setelah mendapatkan Tao, lalu membina diri dengan sungguh-sungguh, tidak mundur walau diterpa ujian dan cobaan maka kelak akan memperoleh kedudukan di Surga.' },
      { h: '落在中原三星地', p: 'Luò Zài Zhōng Yuán Sān Xīng Dì', l: 'Luo Cai Cung Yuen San Sing Ti', m: 'Selain Shan tung, Thien Cin juga merupakan pangkal penyebaran Tao ke berbagai daerah.' },
      { h: '大證四川王桃心', p: 'Dà Zhèng Sì Chuān Wáng Táo Xīn', l: 'Ta Ceng Se Chuan Wang Thao Sin', m: 'Tahun 1947 bulan 8 tanggal 15 imlek, Bapak Guru Agung akan mencapai kesempurnaan di taman Wang Thao Sin, Se Chuan.' },
      { h: '天真收圓掛聖號', p: 'Tiān Zhēn Shōu Yuán Guà Shèng Hào', l: 'Tien Cen Shou Yuen Kua Sheng Hao', m: 'Thien Ran dan Su Cen mengemban tugas penggenapan membuat daftar suci.' },
      { h: '等待時至點神兵', p: 'Děng Dài Shí Zhì Diǎn Shén Bīng', l: 'Teng Tai She Ce Tien Shen Ping', m: 'Tiba saatnya nanti akan dilakukan pengabsenan prajurit Surga.' },
      { h: '雲雷震開戊己土', p: 'Yún Léi Zhèn Kāi Wù Jǐ Tǔ', l: 'Yiin Lei Cen Khai U Ci Thu', m: 'Awan dan petir membelah tanah sentral. (NB : awan dan petir melambangkan api suci yang digunakan Tien Cuan Se saat menurunkan Tao, Tanah sentral melambangkan tempat pusaka pertama).' },
      { h: '天下神鬼不安寧', p: 'Tiān Xià Shén Guǐ Bù ān Níng', l: 'Tien Sia Shen Kuei Pu An Ning', m: 'Para Dewa dan Arwah pun menjadi tidak tentram. (NB: Para Dewa dan Arwah pun ingin mendapatkan Tao. Karena itulah mereka merasa tidak tenang sebab belum bisa mendapatkan Tao).' },
      { h: '親在仁天中華母', p: 'Qīn Zài Rén Tiān Zhōng Huá Mǔ', l: 'Chin Cai Ren Tien Cung Hua Mu', m: 'Bunda Surgawi (Lau Mu) menurunkan seutas benang emas (Firman Tuhan) kepada Cung Hua Se Mu untuk melaksanakan tugas penyelamatan global.' },
      { h: '九蓮聖教歸上乘', p: 'Jiǔ Lián Shèng Jiào Gui Shàng Chéng', l: 'Ciu Lien Sheng Ciau Kuei Shang Sheng', m: 'Para Suci yang dahulu telah kembali ke Surga, Di akhir zaman ini menitis kembali ke dunia untuk membantu tugas penyelamatan global. Kelak sampai saatnya akan kembali ke Surga menempati kedudukan teratai sembilan tingkat.' },
      { h: '天花老母垂玉線', p: 'Tiān Huā Lǎo Mǔ Chuí Yù Xiàn', l: 'Tien Hua Lau Mu Chui Yii Sien', m: 'Bunda Surgawi menurunkan Tao ke dunia.' },
      { h: '收圓顯化在古東', p: 'Shōu Yuán Xiǎn Huà Zài Gǔ Dōng', l: 'Shou Yuen Sien Hua Cai Ku Tung', m: 'Mengadakan penggenapan dan menampakkan keajaiban di bumi timur atau Tiongkok. (NB : pada awalnya Tao di turunkan di Tiongkok).' },
      { h: '南北兩極連宗緒', p: 'Nán Běi Liǎng Jí Lián Zōng Xù', l: 'Nan Pei Liang Ci Lien Cung Sii', m: 'Kemudian Tao menyebar di utara dan selatan Tiongkok, setelah Buddha Maitreya menitis, maka penyebaran Tao memiliki pangkal sentral.' },
      { h: '混元古冊在中央', p: 'Hùn Yuán Gǔ Cè Zài Zhōng Yāng', l: 'Hun Yuen Ku Che Cai Cung Yang', m: 'Sebelum langit dan bumi tercipta, roh suci sudah ada bersama Lau Mu di Surga. Setelah langit dan bumi tercipta roh tersebut menitis ke dalam tubuh manusia bermukim di Sien Kuan Ciau.' },
      { h: '老母降下通天竅', p: 'Lǎo Mǔ Jiàng Xià Tōng Tiān Qiào', l: 'Lau Mu Ciang Sia Thung Thien Chiao', m: 'Lau Mu menurunkan Tao yaitu jalan menuju Surga.' },
      { h: '無影山前對合同', p: 'Wú Yǐng Shān Qián Duì Hé Tóng', l: 'Wu Ying Shan Chien Tuei He Tung', m: 'Juga memberikan tanda pengenal (He Thong) yang dicocokkan di gunung suci tanpa bayangan.' },
      { h: '嬰兒要想歸家去', p: 'Yīng ér Yào Xiǎng Gui Jiā Qù', l: 'Ying Erl Yao Siang Kuei Cia Cii', m: 'Anak-anak Tuhan jika ingin kembali ke surga.' },
      { h: '持念當來彌勒經', p: 'Chí Niàn Dāng Lái Mí Lè Jing', l: 'Che Nien Tang Lai Mi Le cing', m: 'Senantiasa bacalahlah kitab Maitreya dan praktekan ajaran di dalamnya.' },
      { h: '用心持念佛來救', p: 'Yòng Xin Chí Niàn Fó Lái Jiù', l: 'Yung Sin Che Nien Fo Lai Ciu', m: 'Jika membaca dan mempraktekkannya dengan hati yang sungguh-sungguh maka Buddha akan datang menolong.' },
      { h: '朵朵金蓮去超生', p: 'Duǒ Duǒ Jīn Lián Qù Chāo Shēng', l: 'Tuo Tuo Cin Lien Chii Chao Sheng', m: 'Setelah masa penyelamatan global berjalan cukup lama, terlebih setelah Bapak dan Ibu Guru mencapai kesempurnaan kembali ke Surga, di mana wadah Tao tengah mengalami kekacauan dan dilanda ujian bertubi-tubi. Barang siapa yang masih tetap membina diri dengan baik dan benar maka kelak dapat mencapai kesempurnaan kembali ke Surga.' },
      { h: '識得西來白陽子', p: 'Shí De Xi Lái Bái Yáng Zǐ', l: 'Se Te Si Lai Pai Yang Ce', m: 'Kini berbagai aliran dan ajaran bermunculan, maka kenalilah degan jelas Guru Penerang yang mengemban Firman Tuhan, demikian barulah bisa mendapatkan jalan yang benar.' },
      { h: '鄉兒點鐵化成金', p: 'Xiāng ér Diǎn Tiě Huà Chéng Jīn', l: 'Siang Erl Tien Thie Hua Ceng Cin', m: 'Guru penerang menyampaikan Tao kepada umat manusia, merubah manusia menjadi emas yang berharga.' },
      { h: '每日志心常持念', p: 'Měi Rì Zhì Xīn Cháng Chí Niàn', l: 'Mei Re Ce Sin Chang Ce Nien', m: 'Jika senantiasa dapat melantunkan dan mempratekkan isi kitab Maitreya.' },
      { h: '三災八難不來侵', p: 'Sān Zāi Bā Nàn Bù Lái Qīn', l: 'San Cai Pa Nan Pu Lai Chin', m: 'Maka 3 bencana dan 8 petaka tak akan datang menimpa.' },
      { h: '要想成佛勤禮拜', p: 'Yào Xiǎng Chéng Fó Qín Lǐ Bài', l: 'Yao Siang Cheng Fo Chin Li Pai', m: 'Jika ingin menjadi Buddha, rajinlah bersujud dan melakukan pekerjaan Buddha.' },
      { h: '常持聰明智慧心', p: 'Cháng Chí Cōng Míng Zhì Huì Xin', l: 'Chang Che Chong Ming Ce Hui Sin', m: 'Jika terus menerus demikian maka tumbuhlah kearifan.' },
      { h: '休聽邪人胡說話', p: 'Xiū Tīng Xié Rén Hú Shuō Huà', l: 'Siu Thing Sie Ren Hu Shuo Hua', m: 'Berhentilah mendengar omongan-omongan orang sesat atau tidak benar.' },
      { h: '牢拴意馬念無生', p: 'Láo Shuān Yì Mǎ Niàn Wú Shēng', l: 'Lau Suan I Ma Nien U Shen', m: 'Kendalikan pikiran jangan timbul sedikit pun pikiran yang tidak baik.' },
      { h: '老母降下真天咒', p: 'Lǎo Mǔ Jiàng Xià Zhēn Tiān Zhòu', l: 'Lau Mu Ciang Sia Cen Tien Cou', m: 'Lau Mu menurunkan Mantra Surga yang sejati.' },
      { h: '用心持念有神通', p: 'Yòng Xin Chí Niàn Yǒu Shén Tōng', l: 'Yung Sin Che Nien You Shen Thung', m: 'Jika dibaca dengan hati yang sungguh-sungguh maka timbullah kekuatan ajaib.' },
      { h: '滿天星斗都下世', p: 'Mǎn Tiān Xīng Dōu Dōu Xià Shì', l: 'Man Tien Sing Tou Tou Sia Se', m: 'Para Suci di Surga menitis ke dunia untuk membantu tugas penyelamatan global.' },
      { h: '五方列仙下天宮', p: 'Wǔ Fāng Liè Xiān Xià Tiān Gōng', l: 'U Fang Lei Sien Sia Tien Kung', m: 'Dewa Dewi lima penjuru berbaris di istana Surga.' },
      { h: '各方城隍來對號', p: 'Gè Fāng Chéng Huáng Lai Duì Hào', l: 'Ke Fang Cheng Huang Lai Tui Hao', m: 'Dewa kota dari setiap penjuru datang menyocokkan tanda pengenal.' },
      { h: '報事靈童察的清', p: 'Bào Shì Líng Tóng Chá De Qīng', l: 'Pao Se Ling Thung Cha Te Ching', m: 'Dewa kecil Pao Se Ling Thung memeriksa dengan jelas.' },
      { h: '三官大帝慈悲註', p: 'Sān Guān Cí Bēi Dà Dì Zhǔ', l: 'San Kuan Che Pei Ta Ti Cu', m: 'San Kuan Ta Ti mencatatkan nama orang-orang yang mendapatkan Tao.' },
      { h: '赦罪天曹救眾生', p: 'Shè Zuì Sān Cáo Jiù Zhòng Shēng', l: 'She Cuei San Chao Ciu Cung Sheng', m: 'Memberikan pengampunan dosa dan menolong umat di tiga alam.' },
      { h: '救苦天尊來救世', p: 'Jiù Kǔ Tian Zūn Lái Jiù Shì', l: 'Ciu Khu Tien Cuen Lai Ciu She', m: 'Penyelamat dari Surga datang penyelamatan dunia.' },
      { h: '親點文部掩神兵', p: 'Qīn Diǎn Wén Bù Jiē Dì Shén', l: 'Chin Tien Wen Pu Cie Ti Shen', m: 'Memerintahkan Dewa Dewi khayangan untuk membantu pelaksanaan Tao.' },
      { h: '八大金剛來護法', p: 'Bā Dà Jīn Gāng Lai Hù Fǎ', l: 'Pa Ta Cin Kang Lai Hu Fa', m: 'Delapan Vajra (Prajurit Pelindung) datang melindungi.' },
      { h: '四位菩薩救眾生', p: 'Sì Wèi Pú Sà Jiù Zhòng Shēng', l: 'Se Wei Phu Sa Ciu Cung Sheng', m: 'Empat Bodhisatva menolong umat manusia.' },
      { h: '緊領三十六員將', p: 'Jǐn Lǐng Sān Shí Liù Yuán Jiàng', l: 'Cin Ling San She Liu Yuen Ciang', m: 'Memimpin 36 jendral.' },
      { h: '五百靈官緊隨跟', p: 'Wǔ Bǎi Líng Guan Jin Suí Gēn', l: 'U Pai Ling Kuan Cin Sui Ken', m: 'Dan 500 perwira pengawal.' },
      { h: '扶助彌勒成大道', p: 'Fú Zhù Mí Lè Chéng Dà Dào', l: 'Fu Cu Mi Le Cheng Ta Tao', m: 'Membantu Maitreya mencapai kesempurnaan.' },
      { h: '保佑鄉兒得安寧', p: 'Bǎo Yǒu Xiāng ér De ān Níng', l: 'Pao You Siang Erl Te An Ning', m: 'Melindungi anak-anak Tuhan agar memperoleh ketentraman.' },
      { h: '北方真武為將帥', p: 'Běi Fāng Zhēn Wǔ Wéi Jiàng Shuài', l: 'Pei Fang Cen U Wei Ciang Suai', m: 'Cen U Ta Ti akan bertindak sebagai panglima untuk menentramkan kekacauan dunia di akhir zaman.' },
      { h: '青臉紅髮顯神通', p: 'Qīng Lian Hóng Fà Xiǎn Shén Tōng', l: 'Ching Lien Hung fa Sien Shen Tung', m: 'Dengan penuh wibawa dan hati penuh kebajikan manampakkan kekuatan sakti.' },
      { h: '扯起皂旗遮日月', p: 'Chě Qǐ Zao Qí Zhē Rì Yuè', l: 'Che Chi Cao Chi Ce Re Yue', m: 'Mengangkat Panji Hitam menutupi bulan dan matahari. (Dunia menjadi gelap gulita)' },
      { h: '頭頂森羅七寶星', p: 'Tóu Dǐng Sēn Luo Qī Bǎo Xīng', l: 'Thao Ting Sen Luo Chi Pao Sing', m: 'Dengan mahkota kehormatan.' },
      { h: '威鎮北方為帥首', p: 'Wēi Zhèn Běi Fāng Wéi Shuai Shou', l: 'Wei Cen Pei Fang Wei Suai Shou', m: 'Menjadi kepala komandan dan penjaga di utara.' },
      { h: '肅清諸惡掛甲兵', p: 'Sù Qǐng Zhū è Guà Jiǎ Bīng', l: 'Su Ching Cu E Kua Cia Ping', m: 'Menumpas para iblis dan memerintahkannya untuk meletakkan senjata.' },
      { h: '搭救原人鄉兒女', p: 'Dā Jiù Yuán Rén Xiāng ér Nǚ', l: 'Ta Ciu Yuen Ren Siang Erl Ni', m: 'Menyelamatkan anak-anak Tuhan.' },
      { h: '火光落地化為塵', p: 'Huǒ Guāng Luò Dì Huà Wéi Chen', l: 'Huo Kuang Luo Ti Hua Wei Chen', m: 'Dan melenyapkan bencana dan malapetaka menjadi debu.' },
      { h: '四海龍王來助道', p: 'Sì Hǎi Long Wang Lai Zhù Dào', l: 'Se Hai Lung Wang Lai Cu Tao', m: 'Raja Naga empat samudra datang membantu pelaksanaan Tao.' },
      { h: '各駕祥雲去騰空', p: 'Gè Jià Xiang Yun Qù Téng Kōng', l: 'Ke Cia Siang Yiin Chii Theng Khung', m: 'Mengendarai awan terbang ke angkasa.' },
      { h: '十方天兵護佛駕', p: 'Shí Fāng Tiān Bīng Hù Fó Jià', l: 'Se Fang Thien Ping Hu Fo Cia', m: 'Prajurit Surga dari sepuluh penjuru.' },
      { h: '保佑彌勒去成功', p: 'Bǎo Yǒu Mí Lè Chéng Gōng', l: 'Pao You Mi Le Chii Cheng Kung', m: 'Datang melindungi Maitreya agar sempurna melaksanakan tugas penggenapan.' },
      { h: '紅陽了道歸家去', p: 'Hóng Yáng Liǎo Dào Guī Jiā Qù', l: 'Hung Yang Liao Tao Kuei Cia Chii', m: 'Zaman pancaran merah telah berlalu.' },
      { h: '轉到三陽彌勒尊', p: 'Zhuǎn Dào Sān Yáng Mí Lè Zūn', l: 'Cuan Tao San Yang Mi Le Cuen', m: 'Kini memasuki zaman ketiga yaitu zaman pancaran putih, zaman Buddha Maitreya.' },
      { h: '無皇敕令寄下生', p: 'Wú Huáng Chì Lìng Jì Xià Shēng', l: 'U Huang Che Ling Ci Sia Sheng', m: 'Lau Mu memerintahkan para suci.' },
      { h: '收伏南閻歸正宗', p: 'Shōu Fú Nán Yán Guī Zhèng Zong', l: 'Shou Fu Nan Yen Kuei Ceng Cung', m: 'Untuk turun ke dunia dan menarik semua ajaran kembali kepada yang sejati (Tao).' },
      { h: '來往造下真言咒', p: 'Lái Wǎng Zao Xià Zhēn Yán Zhòu', l: 'Lai Wang Cao Sia Cen Yen Cou', m: 'Atas titah dari Lau Mu, Buddha Maitreya turun ke dunia.' },
      { h: '傳下當來大藏經', p: 'Chuán Xià Dāng Lái Dà Zàng Jīng', l: 'Chuan Sia Tang Lai Ta Cang Cing', m: 'Maka terciptalah mantra suci dan kitab agung.' },
      { h: '嬰兒奼女常持念', p: 'Yīng ér Chà Nǚ Cháng Chí Niàn', l: 'Ying Erl Cha Nii Chang Che Nien', m: 'Anak-anak Tuhan jika senantiasa membacanya.' },
      { h: '邪神不敢來近身', p: 'Xié Shén Bù Gan Lai Jìn Shēn', l: 'Sie Shen Pu Kan Lai Cin Shen', m: 'Maka setan pun tak berani mendekati.' },
      { h: '持念一遍神通大', p: 'Chí Niàn Yī Biàn Shén Tōng Dà', l: 'Che Nien I Pien Shen Thung Ta', m: 'Membaca sekali akan timbul kekuatan ajaib.' },
      { h: '持念兩遍得超生', p: 'Chí Niàn Liǎng Biàn De Chāo Shēng', l: 'Che Nien Liang Pien Te Chao Sheng', m: 'Membaca dua kali akan dapat melampaui kehidupan.' },
      { h: '持念三遍神鬼怕', p: 'Chí Niàn Sān Biàn Shén Guǐ Pà', l: 'Che Nien San Pien Shen Kuei Pha', m: 'Membaca tiga kali Dewa dan iblis pun takut.' },
      { h: '魍魎邪魔化為塵', p: 'Wǎng Liǎng Xié Mó Huà Wéi Chen', l: 'Wang Liang Sie Mo Hua Wei Chen', m: 'Iblis, setan dan siluman akan menjadi debu.' },
      { h: '修持劫內尋路徑', p: 'Xiū Chí Jié Nèi Xún Lù Jìng', l: 'Siu Che Cie Nei Siin Lu Cing', m: 'Di akhir zaman yang penuh bencana, binalahlah diri dengan baik, temukan jalan yang benar!' },
      { h: '念起真言歸佛令', p: 'Niàn Qǐ Zhēn Yán Guī Fó Lìng', l: 'Nien Chi Cen Yen Kuei Fo Ling', m: 'Baca mantra sejati, tegakkan dan tunaikan ikrar luhur, tak mundur walau dihadang ujian, kelak kembali ke Surga melaporkan pertanggung jawaban kepada Lau Mu.' },
      { h: '南無天元太保阿彌陀佛', p: 'Nán Wú Tiān Yuán Tài Bǎo ē Mi Tuó Fó', l: 'Nan Wu Thien Yüen Thai Pao A Mi Thuo Fo', m: 'Namo Tian Yuan Tai Bao A Mi Tuo Fo (Terpujilah Tian Yuan Tai Bao Amitabha Buddha)' }
    ]
  },
  baixiao: {
    id: 'baixiao',
    short: 'Bai Xiao',
    title: '百孝經',
    titlePinyin: 'Bǎi Xiào Jīng',
    titleMeaning: 'Kitab Seratus Bakti',
    author: 'oleh Maha Sesepuh Han (白水聖帝)',
    verses: [
      { h: '天地重孝孝當先', p: 'Tiãn Dì Zhòng Xiào Xiào Dãng Xiãn', l: 'tian di zhong xiao xiao dang xian', m: 'Dunia mementingkan bakti, bakti harus diutamakan' },
      { h: '一個孝字全家安', p: 'Yĩ Gè Xiào Zì Quán Jiā ān', l: 'yi ge xiao zi quan jia an', m: 'Dengan adanya bakti, seisi keluarga akan selalu mendapatkan ketentraman dan keselamatan' },
      { h: '孝順能生孝順子', p: 'Xiào Shùn Néng Shẽng Xiào Shùn Zĩ', l: 'xiao shun neng sheng xiao shun zi', m: 'Orang yang berbakti akan mendapatkan anak yang berbakti pula.' },
      { h: '孝順子弟必明賢', p: 'Xiào Shùn Zĩ Dì Bì Míng Xián', l: 'xiao shun zi di bi ming xian', m: 'anak yang berbakti pastilah bijaksana dan berbudi' },
      { h: '孝是人道第一步', p: 'Xiào Shì Rén Dào Dì Yĩ Bù', l: 'xiao shi ren dao di yi bu', m: 'Bakti merupakan langkah pertama dalam norma kemanusian' },
      { h: '孝子謝世即為仙', p: 'Xiào Zĩ Xiè Shì Jí Wéi Xiãn', l: 'xiao zi xie shi ji wei xian', m: 'seseorang yang berbakti, kelak setelah meninggal akan menjadi Dewa.' },
      { h: '自古忠臣多孝子', p: 'Zì Gũ Zhōng Chén Duō Xiào Zĩ', l: 'zi gu zhong chen duo xiao zi', m: 'Sejak dahulu kala pejabat-pejabat yang setia merupakan orang yang berbakti' },
      { h: '君選賢臣舉孝廉', p: 'Jūn Xuăn Xián Chén Jủ Xiào Lián', l: 'jun xuan xian chen ju xiao lian', m: 'raja memilih pejabat yang bijaksana atas dasar bakti dan kejujuran.' },
      { h: '盡心竭力孝父母', p: 'Jìn Xĩn Jié Lì Xiào Fù Mŭ', l: 'jin xin jie li xiao fu mu', m: 'Setulus hati berbakti pada orang tua' },
      { h: '孝道不獨講吃穿', p: 'Xiào Dào Bù Dú Jiăng Chĩ Chuān', l: 'xiao dao bu du jiang chi chuan', m: 'berbakti tidak terletak pada masalah sandang dan pangan saja.' },
      { h: '孝道貴在心中孝', p: 'Xiào Dào Guì Zài Xĩn Zhōng Xiào', l: 'xiao dao gui zai xin zhong xiao', m: 'Bakti yang termulia adalah bakti yang berasal dari lubuk hati' },
      { h: '孝親親責莫回言', p: 'Xiào Qin Qĩn Zé Mò Huí Yán', l: 'xiao qin qin ze mo hui yan', m: 'berbakti pada orang tua, sekalipun dimarahi tetap tidak membantah.' },
      { h: '惜乎人間不識孝', p: 'Xĩ Hū Rén Jiãn Bù Shí Xiào', l: 'xi hu ren jian bu shi xiao', m: 'Sayangnya manusia di dunia tidak mengenal bakti' },
      { h: '回心復孝天理還', p: 'Huí Xĩn Fù Xiào Tiãn Lĩ Huán', l: 'hui xin fu xiao tian li huan', m: 'kembalilah melaksanakan bakti sesuai dengan hati nurani.' },
      { h: '諸事不順因不孝', p: 'Zhũ Shì Bù Shùn Yĩn Bù Xiào', l: 'zhu shi bu shun yin bu xiao', m: 'Segala sesuatu tidak lancar dikarenakan tidak berbakti' },
      { h: '怎知孝能感動天', p: 'Zěn Zhĩ Xiào Néng Găn Dòng Tiãn', l: 'zen zhi xiao neng gan dong tian', m: 'tak tahunya bakti dapat mengharukan Tuhan.' },
      { h: '孝道貴順無他妙', p: 'Xiào Dào Guì Shùn Wú Tã Miào', l: 'xiao dao gui shun wu ta miao', m: 'Tidak ada cara lain untuk berbakti pada orang tua selain bersikap patuh' },
      { h: '孝順不分女共男', p: 'Xiào Shùn Bù Fên Nủ Gòng Nán', l: 'xiao shun bu fen nv gong nan', m: 'bakti tidak membedakan pria dan wanita.' },
      { h: '福祿皆由孝字得', p: 'Fú Lù Jiẽ You Xiào Zì Dé', l: 'fu lu jie you xiao zi de', m: 'Rezeki dan kemakmuran yang diperoleh semuanya berasal dari bakti' },
      { h: '天將孝子另眼觀', p: 'Tiān Jiãng Xiào Zĩ Lìng Yăn Guān', l: 'tian jiang xiao zi ling yan guan', m: 'Tuhan memperlakukan orang yang berbakti secara istimewa.' },
      { h: '人人都可孝父母', p: 'Rén Rén Dõu Kě Xiào Fù Mŭ', l: 'ren ren dou ke xiao fu mu', m: 'Setiap orang dapat berbakti pada orang tuanya' },
      { h: '孝敬父母如敬天', p: 'Xiào Jìng Fù Mů Rú Jìng Tiãn', l: 'xiao jing fu mu ru jing tian', m: 'berbakti dan menghormati orang tua ibarat menghormati Tuhan.' },
      { h: '孝子口裡有孝語', p: 'Xiào Zĩ Kou Lĩ You Xiào Yũ', l: 'xiao zi kou li you xiao yu', m: 'Anak lelaki yang berbakti akan kelihatan dari tutur katanya' },
      { h: '孝婦面上帶孝顏', p: 'Xiào Fù Miàn Shàng Dài Xiào Yán', l: 'xiao fu mian shang dai xiao yan', m: 'menantu perempuan yang menjalankan bakti akan terpancar dari wajahnya.' },
      { h: '公婆上邊能盡孝', p: 'Gõng Pó Shàng Biãn Néng Jìn Xiào', l: 'gong po shang bian neng jin xiao', m: 'Apabila dapat berbakti kepada mertua' },
      { h: '又落孝來又落賢', p: 'Yòu Luò Xiào Lái Yòu Luò Xián', l: 'you luo xiao lai you luo xian', m: 'selain dipuji sebagai seseorang yang berbakti, juga dinilai sebagai seseorang yang berbudi luhur.' },
      { h: '女得淑名先學孝', p: 'Nů Dé Shū Míng Xiãn Xué Xiào', l: 'nv de shu ming xian xue xiao', m: 'Untuk mendapatkan nama baik, wanita terlebih dahulu harus belajar berbakti' },
      { h: '三從四德孝在前', p: 'Sãn Cóng Sì Dé Xiào Zài Qián', l: 'san chong si de xiao zai qian', m: 'bahkan di dalam 3 Panutan dan 4 Budi kewanitaan, bakti juga menempati tempat pertama.' },
      { h: '孝在鄉黨人欽敬', p: 'Xiào Zài Xiãng Dăng Rén Qin Jìng', l: 'xiao zai xiang dang ren qin jing', m: 'Berbakti dalam masyarakat akan dihormati orang' },
      { h: '孝在家中大小歡', p: 'Xiào Zài Jiã Zhõng Dà Xiảo Huãn', l: 'xiao zai jia zhong da xiao huan', m: 'berbakti dalam keluarga, seiisi keluarga akan bahagia.' },
      { h: '孝子逢人就勸孝', p: 'Xiào Zĩ Féng Rén Jiù Quàn Xiào', l: 'xiao zi feng ren jiu quan xiao', m: 'Anak yang berbakti akan selalu mendorong orang lain untuk menjalankan bakti' },
      { h: '孝化風俗人品端', p: 'Xiào Huà Fêng Sú Rén Pín Duần', l: 'xiao hua feng su ren pin duan', m: 'bakti merubah adat istiadat dan moral manusia menjadi baik.' },
      { h: '生前孝子聲價貴', p: 'Shẽng Qián Xiào Zĩ Shēng Jià Gui', l: 'sheng qian xiao zi sheng jia gui', m: 'Semasa hidupnya orang berbakti akan mempunyai nama yang harum' },
      { h: '死後孝子萬古傳', p: 'Sĩ Hòu Xiào Zĩ Wàn Gũ Chuán', l: 'si hou xiao zi wan gu chuan', m: 'setelah meninggal perbuatannya akan dikenang orang selamanya.' },
      { h: '處世惟有孝力大', p: 'Chủ Shì Wéi You Xiào Lì Dà', l: 'chu shi wei you xiao li da', m: 'Dalam menangani dan menyelesaikan masalah, bakti memberikan kekuatan yang besar' },
      { h: '孝能感動地合天', p: 'Xiào Néng Găn Dòng Dì Hé Tiãn', l: 'xiao neng gan dong di he tian', m: 'bakti dapat mengharukan langit dan bumi.' },
      { h: '孝經孝文把孝勸', p: 'Xiào Jing Xiào Wén Bả Xiào Quàn', l: 'xiao jing xiao wen ba xiao quan', m: 'Kitab dan sastra bakti mengajarkan manusia untuk berbakti' },
      { h: '孝父孝母孝祖先', p: 'Xiào Fù Xiào Mũ Xiào Zũ Xiãn', l: 'xiao fu xiao mu xiao zu xian', m: 'berbakti kepada ayah, ibu, dan leluhur.' },
      { h: '父母生子原為孝', p: 'Fù Mŭ Shẽng Zĩ Yuán Wéi Xiào', l: 'fu mu sheng zi yuan wei xiao', m: 'Orang tua melahirkan anak juga merupakan bentuk bakti' },
      { h: '能孝就是好兒男', p: 'Néng Xiào Jiù Shì Hăo ér Nán', l: 'neng xiao jiu shi hao er nan', m: 'dapat berbakti merupakan orang yang baik.' },
      { h: '為人能把父母孝', p: 'Wéi Rén Néng Bă Fù Mũ Xiào', l: 'wei ren neng ba fu mu xiao', m: 'Apabila orang dapat berbakti kepada orang tuanya' },
      { h: '下輩孝子照樣還', p: 'Xià Bèi Xiào Zĩ Zhào Yàng Huán', l: 'xia bei xiao zi zhao yang huan', m: 'kelak anak cucunya juga akan berbakti kepadanya.' },
      { h: '堂上父母不知孝', p: 'Táng Shàng Fù Mũ Bù Zhĩ Xiào', l: 'tang shang fu mu bu zhi xiao', m: 'Jika tidak tahu berbakti pada orang tua' },
      { h: '不孝受窮莫怨天', p: 'Bù Xiào Shòu Qióng Mò Yuàn Tiãn', l: 'bu xiao shou qiong mo yuan tian', m: 'kelak sengsara janganlah menyalahkan Tuhan.' },
      { h: '孝子面帶太和象', p: 'Xiào Zĩ Miàn Dài Tài Hé Xiàng', l: 'xiao zi mian dai tai he xiang', m: 'Seorang anak yang berbakti akan mempunyai wajah yang penuh kedamaian' },
      { h: '入孝出悌自然安', p: 'Rù Xiào Chũ Tì Zì Rán ãn', l: 'ru xiao chu ti zi ran an', m: 'bila dapat berbakti dan rukun dengan saudara-saudara, dengan sendirinya akan selalu berada dalam keadaan yang selamat.' },
      { h: '親在應孝不知孝', p: 'Qīn Zài Yĩng Xiào Bù Zhĩ Xiào', l: 'qin zai ying xiao bu zhi xiao', m: 'Semasa orang tua masih hidup, yang seharusnya berbakti tetapi tidak dilaksanakan' },
      { h: '親死知孝後悔難', p: 'Qĩn Sĩ Zhĩ Xiào Hòu Hui Nán', l: 'qin si zhi xiao hou hui nan', m: 'setelah orang tua meninggal baru hendak berbakti, menyesal pun sudah tiada berguna.' },
      { h: '孝在心孝不在貌', p: 'Xiào Zài Xĩn Xiào Bù Zài Mào', l: 'xiao zai xin xiao bu zai mao', m: 'Berbakti harus dari lubuk hati, bukan hanya penampilan luar saja' },
      { h: '孝貴實行不在言', p: 'Xiào Guì Shí Xíng Bù Zài Yán', l: 'xiao gui shi xing bu zai yan', m: 'berbakti harus dijalankan bukan hanya di mulut saja.' },
      { h: '孝子齊家全家樂', p: 'Xiào Zĩ Qí Jiā Quán Jiā Lè', l: 'xiao zi qi jia quan jia le', m: 'Orang yang berbakti memimpin keluarga, sekeluarga akan bahagia' },
      { h: '孝子治國萬民安', p: 'Xiào Zĩ Zhì Guó Wàn Mín ãn', l: 'xiao zi zhi guo wan min an', m: 'orang yang berbakti mengatur negara, seluruh rakyat akan aman sentosa.' },
      { h: '五榖豐登皆因孝', p: 'Wũ Gů Fēng Dēng Jiẽ Yĩn Xiào', l: 'wu gu feng deng jie yin xiao', m: 'Kemakmuran berasal dari bakti' },
      { h: '一孝即是太平年', p: 'Yĩ Xiào Jí Shì Tài Píng Nián', l: 'yi xiao ji shi tai ping nian', m: 'dengan adanya bakti maka terbentuklah kedamaian.' },
      { h: '能孝不在貧和富', p: 'Néng Xiào Bù Zài Pín Hé Fù', l: 'neng xiao bu zai pin he fu', m: 'Melaksanakan bakti tidak membedakan kaya dan miskin' },
      { h: '善體親心是孝男', p: 'Shàn Tĩ Qĩn Xĩn Shì Xiào Nán', l: 'shan ti qin xin shi xiao nan', m: 'yang bisa memahami isi hati orang tua dengan baik adalah orang yang berbakti.' },
      { h: '兄弟和睦即為孝', p: 'Xiōng Dì Hé Mù Jí Wéi Xiào', l: 'xiong di he mu ji wei xiao', m: 'Sesama keluarga bisa rukun, dan akur merupakan wujud dari bakti' },
      { h: '忍讓二字把孝全', p: 'Rěn Ràng èr Zì Bă Xiào Quán', l: 'ren rang er zi ba xiao quan', m: 'dengan sikap bersabar dan mengalah maka sempurnalah baktinya.' },
      { h: '孝從難處見真孝', p: 'Xiào Cóng Nán Chù Jiàn Zhēn Xiào', l: 'xiao cong nan chu jian zhen xiao', m: 'Dapat berbakti dalam keadaan sulit barulah kelihatan bakti yang sesungguhnya' },
      { h: '孝容滿面承親顏', p: 'Xiào Róng Măn Miàn Chéng Qĩn Yán', l: 'xiao rong man mian cheng qin yan', m: 'dengan wajah yang berbakti menggembirakan orang tua.' },
      { h: '父母雙全正宜孝', p: 'Fù Mũ Shuãng Quán Zhèng Yí Xiào', l: 'fu mu shuang quan zheng yi xiao', m: 'Selagi orang tua kita hidup kita wajib berbakti' },
      { h: '孝思鰥寡親影單', p: 'Xiào Sĩ Guân Guă Qìn Yĩng Dãn', l: 'xiao si guan gua qin ying dan', m: 'anak yang berbakti harus mengerti kesepian yang dirasakan orang tuanya yang menjanda / menduda.' },
      { h: '趕緊孝來光陰快', p: 'Găn Jĩn Xiào Lái Guāng Yĩn Kuài', l: 'gan jin xiao lai guang yin kuai', m: 'Cepatlah melaksanakan bakti karena waktu berlalu dengan cepat' },
      { h: '親由我孝壽由天', p: 'Qin You Wỏ Xiào Shòu Yóu Tiãn', l: 'qin you wo xiao shou you tian', m: 'berbakti adalah kewajiban kita, namun usia orang tua kita terletak di tangan Tuhan.' },
      { h: '生前能孝方為孝', p: 'Shẽng Qián Néng Xiào Fãng Wéi Xiào', l: 'sheng qian neng xiao fang wei xiao', m: 'Berbakti pada saat orang tua masih hidup barulah merupakan bakti yang sesungguhnya' },
      { h: '死後盡孝徒枉然', p: 'Sĩ Hòu Jìn Xiào Tú Wăng Rán', l: 'si hou jin xiao tu wang ran', m: 'menunaikan bakti sesudah orang tua meninggal sudah tidak ada artinya lagi.' },
      { h: '孝順傳家孝是寶', p: 'Xiào Shùn Chuán Jia Xiào Shì Băo', l: 'xiao shun chuan jia xiao shi bao', m: 'Bakti merupakan pusaka yang diwariskan secara turun-temurun' },
      { h: '孝性溫和孝味甘', p: 'Xiào Xìng Wẽn Hé Xiào Wèi Gãn', l: 'xiao xing wen he xiao wei gan', m: 'bakti membawa rasa damai dan kesuka-citaan.' },
      { h: '羊羔跪乳尚知孝', p: 'Yáng Gão Guì Rũ Shàng Zhĩ Xiào', l: 'yang gao gui ru shang zhi xiao', m: 'Anak kambing menyusu sambil berlutut karena tahu berbakti' },
      { h: '烏鴉反哺孝親顏', p: 'Wū Yā Făn Bũ Xiào Qin Yán', l: 'wu ya fan bu xiao qin yan', m: 'burung gagak berbakti dengan merawat kembali induknya.' },
      { h: '為人若是不知孝', p: 'Wéi Rén Ruò Shì Bù Zhĩ Xiào', l: 'wei ren ruo shi bu zhi xiao', m: 'Sebagai manusia jika tidak tahu berbakti' },
      { h: '不如禽獸實可憐', p: 'Bù Rú Qín Shòu Shí Kě Lián', l: 'bu ru qin shou shi ke lian', m: 'masih kalah dibandingkan dengan binatang, suatu hal yang sangat menyedihkan.' },
      { h: '百行萬善孝為首', p: 'Bải Xíng Wàn Shàn Xiào Wéi Shou', l: 'bai hang wan shan xiao wei shou', m: 'Sebanyak apapun perbuatan baik yang kita lakukan, bakti adalah yang paling utama' },
      { h: '當知孝字是根源', p: 'Dãng Zhĩ Xiào Zì Shì Gẽn Yuán', l: 'dang zhi xiao zi shi gen yuan', m: 'ketahuilah bahwa bakti adalah sumber dari segala perbuatan baik.' },
      { h: '念佛行善也是孝', p: 'Niàn Fó Xíng Shàn Yě Shì Xiào', l: 'nian fo xing shan ye shi xiao', m: 'Menyembah Tuhan dan melakukan perbuatan baik juga termasuk bakti' },
      { h: '孝仗佛力超九天', p: 'Xiào Zhàng Fó Lì Chão Jiŭ Tiān', l: 'xiao zhang fo li chao jiu tian', m: 'berbakti dengan kekuatan Tuhan akan dapat mencapai Surga.' },
      { h: '大哉孝乎大哉孝', p: 'Dà Zãi Xiào Hũ Dà Zãi Xiào', l: 'da zai xiao hu da zai xiao', m: 'Bakti amatlah luhur dan mulia' },
      { h: '孝矣無窮孝無邊', p: 'Xiào Yĩ Wú Qióng Xiào Wú Biãn', l: 'xiao yu wu qiong xiao wu bian', m: 'kemuliaannya tiada terhingga dan tiada terbatas.' },
      { h: '此篇句句不離孝', p: 'Cĩ Piãn Jù Jù Bù Lí Xiào', l: 'ci pian ju ju bu li xiao', m: 'Pada syair di atas, setiap kalimat tidak terlepas dari kata Bakti' },
      { h: '離孝人倫顛倒顛', p: 'Lí Xiào Rén Lún Diãn Dăo Diãn', l: 'li xiao ren lun dian dao dian', m: 'jika terpisah dari bakti maka norma kemanusiaan pun menjadi kacau.' },
      { h: '念得十遍千個孝', p: 'Niàn Dé Shí Biàn Qiãn Gè Xiào', l: 'nian de shi bian qian ge xiao', m: 'Membaca 10 kali syair ini akan tercakup ribuan bakti' },
      { h: '念得百遍萬孝全', p: 'Niàn Dé Bải Biàn Wàn Xiào Quán', l: 'nian de bai bian wan xiao quan', m: 'membaca 100 kali kitab bakti ini maka lengkaplah bakti tersebut.' },
      { h: '千遍萬遍常常念', p: 'Qiãn Biàn Wàn Biàn Cháng Cháng Niàn', l: 'qian bian wan bian chang chang nian', m: 'Sering-seringlah membaca kitab bakti ini' },
      { h: '消災免難百孝篇', p: 'Xião Zãi Miăn Nàn Bải Xiào Piãn', l: 'xiao zai mian nan bai xiao pian', m: 'Kitab Ratusan Bakti ini dapat menghilangkan bencana dan membuat kita terhindar dari musibah.' }
    ]
  }
};

const HUIXIANG = {
  title: '迴向文',
  titlePinyin: 'Huí Xiàng Wén',
  titleMeaning: 'Naskah Hui Xiang',
  left: [
    { h: '弟子', l: 'Ti ce ....', note: 'sayYourName' },
    { h: '願將', l: 'Yen ciang' },
    { h: '誦經功德', l: 'song cing kong te' },
    { h: '無條件', l: 'Wu thiao cien' },
    { h: '迴向於', l: 'Hui siang yi' },
    { h: '四大菩薩', l: 'Se ta phusa' },
    { h: '及教化菩薩', l: 'Ci ciao hua pu sa' },
    { h: '以增善功', l: 'Yi Cen shan kong' },
    { h: '結佛緣', l: 'Cie fo yen' },
    { h: '祈求', l: 'Chi chiu' },
    { h: '搭幫助道', l: 'Ta pang cu tao' },
    { h: '道務宏展', l: 'Tao wu hong can' },
    { h: '峇里島', l: 'Bali tao' },
    { h: '廣濟道場', l: 'Kuang ci tao chang' },
    { h: '所有道親', l: 'Suo you tao chin' },
    { h: '開智慧', l: 'Khai ce hui' },
    { h: '發菩提心', l: 'Fa phu ti sin' }
  ],
  right: [
    { h: '團結合作', l: 'Thuan cie he cuo' },
    { h: '同心同德', l: 'Thong Sin thong te' },
    { h: '開創道務', l: 'Khai chuang tao wu' },
    { h: '培育人才', l: 'Phei yi ren chai' },
    { h: '成全道親', l: 'Chen chien tao chin' },
    { h: '光明學園', l: 'Kuang ming sie yen' },
    { h: '推廣素食', l: 'Thuei kuang su se' },
    { h: '十組運作', l: 'Se cu yin cuo' },
    { h: '順利成功', l: 'Sun Li chenkong' }
  ],
  closing: [
    { h: '願以此功德', l: 'Yen yi ce kong te' },
    { h: '莊嚴佛淨土', l: 'Cuang yen fo cin thu' },
    { h: '上報三重恩', l: 'Sang pao Se chong en' },
    { h: '下濟三塗苦', l: 'Sia chi san thu khu' },
    { h: '若有見聞者', l: 'Ruo you cien wen ce' },
    { h: '悉發菩提心', l: 'Si faphuthisin' },
    { h: '盡此一報身', l: 'Cin ce yi pao sen' },
    { h: '同生極樂國', l: 'Thong sen ci le kuo' }
  ]
};

const APP_VERSION = '1.1';

const CHANGELOG = [
  {
    version: '1.1',
    changes: [
      'Menyempurnakan lafal Hokkien Sutra Hati (Heart Sutra).',
      'Menambahkan pinyin (bertanda nada) Bai Xiao Jing; romanisasi sebelumnya dipindah ke Lafal.',
      'Menambahkan pinyin (bertanda nada) Mi Le Jiu Ku Zhen Jing.',
      'Menu burger kini memisahkan About, Hui Xiang, dan Riwayat Versi ke halaman tersendiri.'
    ]
  },
  {
    version: '1.0',
    changes: [
      'Rilis perdana dengan tiga parita: Mi Le Jiu Ku Zhen Jing, Heart Sutra, dan Bai Xiao Jing.',
      'Penghitung digital, riwayat sesi, auto-scroll, dan mode tampilan.'
    ]
  }
];

const I18N = {
  en: {
    allTime: 'All-time Recitations',
    view: 'View',
    show: 'Show',
    hanzi: 'Hanzi',
    pinyin: 'Pinyin',
    lafal: 'Lafal',
    meaning: 'Meaning',
    scrollSpeed: 'Auto-scroll speed',
    haptics: 'Haptic feedback',
    autoScroll: 'Auto-Scroll',
    counter: 'Counter',
    save: 'Save Session',
    log: 'Session Log',
    undo: 'Undo',
    reset: 'Reset',
    tap: 'Tap',
    install: '⬇ Add to Home Screen',
    saveTitle: 'Save Session',
    saveSummary: 'This session',
    cancel: 'Cancel',
    saveConfirm: 'Save',
    clearAll: 'Clear All',
    close: 'Close',
    emptyLog: 'No sessions logged yet.',
    menu: 'Menu',
    about: 'About',
    huixiang: 'Hui Xiang',
    changelog: 'Version History',
    rightColumn: 'Right Column',
    closingVerse: 'Dedication',
    sayYourName: 'state your name',
    aboutBody: 'Pocket Sutra is a simple companion for chanting the Mi Le Jiu Ku Zhen Jing (彌勒救苦真經), the Heart Sutra (般若波羅蜜多心經), and the Bai Xiao Jing (百孝經). It includes Hanzi, Pinyin, Lafal, and translation, plus a digital counter and session log.'
  },
  id: {
    allTime: 'Jumlah Semua Waktu',
    view: 'Tampilan',
    show: 'Tampilkan',
    hanzi: 'Hanzi',
    pinyin: 'Pinyin',
    lafal: 'Lafal',
    meaning: 'Arti',
    scrollSpeed: 'Kecepatan Auto-Scroll',
    haptics: 'Getaran (haptic)',
    autoScroll: 'Auto-Scroll',
    counter: 'Hitung',
    save: 'Simpan Sesi',
    log: 'Riwayat',
    undo: 'Undo',
    reset: 'Reset',
    tap: 'Ketuk',
    install: '⬇ Tambah ke Layar Utama',
    saveTitle: 'Simpan Sesi',
    saveSummary: 'Sesi ini',
    cancel: 'Batal',
    saveConfirm: 'Simpan',
    clearAll: 'Hapus Semua',
    close: 'Tutup',
    emptyLog: 'Belum ada sesi tersimpan.',
    menu: 'Menu',
    about: 'Tentang',
    huixiang: 'Hui Xiang',
    changelog: 'Riwayat Versi',
    rightColumn: 'Kolom Kanan',
    closingVerse: 'Pelimpahan',
    sayYourName: 'sebutkan nama',
    aboutBody: 'Pocket Sutra adalah pendamping sederhana untuk melafalkan Mi Le Jiu Ku Zhen Jing (彌勒救苦真經), Sutra Hati (般若波羅蜜多心經), dan Bai Xiao Jing (百孝經). Menyajikan Hanzi, Pinyin, Lafal, dan terjemahan, dilengkapi penghitung digital dan riwayat sesi.'
  }
};

const STORAGE_KEY = 'pocket_sutra_data_v1';

const DEFAULT_STATE = {
  sutra: 'heart',
  lang: 'id',
  theme: 'dark',
  fontSize: 20,
  showHanzi: true,
  showPinyin: true,
  showLafal: true,
  showMeaning: true,
  autoScroll: false,
  scrollSpeed: 2,
  haptics: true,
  sessions: { heart: 0, mile: 0, baixiao: 0 },
  cumulativeTotal: 0,
  logs: []
};

const SPEED_STEPS = [0.4, 0.8, 1.4, 2.2, 3.2];

let state = loadState();
let scrollTimer = null;

function loadState() {
  const s = Object.assign({}, DEFAULT_STATE, { sessions: Object.assign({}, DEFAULT_STATE.sessions) });
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      Object.assign(s, parsed);
      s.sessions = Object.assign({}, DEFAULT_STATE.sessions, parsed.sessions || {});
    }
  } catch (e) {
    console.warn('Failed to load state', e);
  }
  return s;
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Failed to save state', e);
  }
}

function t(key) {
  return (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key;
}

function currentCount() {
  return state.sessions[state.sutra] || 0;
}

function setCount(n) {
  state.sessions[state.sutra] = n;
}

function pad3(n) {
  return String(Math.max(0, n)).padStart(3, '0');
}

function vibrate(ms) {
  if (state.haptics && navigator.vibrate) {
    try { navigator.vibrate(ms); } catch (e) { /* ignore */ }
  }
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function formatDate(ts) {
  const d = new Date(ts);
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) +
    ' ' + d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  const langBtn = document.getElementById('langBtn');
  langBtn.textContent = state.lang === 'id' ? 'ID' : 'EN';
}

function applyTheme() {
  document.body.dataset.theme = state.theme;
  document.getElementById('themeBtn').textContent = state.theme === 'dark' ? '🌙' : '☀️';
}

function renderCounter() {
  const n = currentCount();
  document.getElementById('tapCount').textContent = n;
  document.getElementById('counterValue').textContent = pad3(n);
  document.getElementById('cumulativeTotal').textContent = state.cumulativeTotal;
}

function renderTabs() {
  document.querySelectorAll('.sutra-tab').forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.sutra === state.sutra);
  });
}

function renderViewPanel() {
  document.querySelectorAll('.chip').forEach((chip) => {
    const line = chip.dataset.line;
    const on = {
      hanzi: state.showHanzi,
      pinyin: state.showPinyin,
      lafal: state.showLafal,
      meaning: state.showMeaning
    }[line];
    chip.classList.toggle('active', on);
  });
  document.getElementById('speedRange').value = state.scrollSpeed;
  document.getElementById('speedValue').textContent = state.scrollSpeed;
  document.getElementById('hapticToggle').checked = state.haptics;
}

function renderSutra() {
  const data = SUTRAS[state.sutra];
  document.getElementById('sutraTitle').textContent = data.title;
  let subtitle = [data.titlePinyin, data.titleMeaning].filter(Boolean).join(' — ');
  if (data.author) subtitle = subtitle ? subtitle + ' · ' + data.author : data.author;
  document.getElementById('sutraSubtitle').textContent = subtitle;

  const body = document.getElementById('sutraBody');
  body.style.fontSize = state.fontSize + 'px';

  body.innerHTML = data.verses.map((v) => {
    const hanzi = state.showHanzi && v.h ? `<div class="ln hanzi"><span class="lbl">${t('hanzi')}</span>${escapeHtml(v.h)}</div>` : '';
    const pinyin = state.showPinyin && v.p ? `<div class="ln pinyin"><span class="lbl">${t('pinyin')}</span>${escapeHtml(v.p)}</div>` : '';
    const lafal = state.showLafal && v.l ? `<div class="ln lafal"><span class="lbl">${t('lafal')}</span>${escapeHtml(v.l)}</div>` : '';
    const meaning = state.showMeaning && v.m ? `<div class="ln meaning"><span class="lbl">${t('meaning')}</span>${escapeHtml(v.m)}</div>` : '';
    return `<div class="verse">${hanzi}${pinyin}${lafal}${meaning}</div>`;
  }).join('');
}

function renderAll() {
  renderTabs();
  renderCounter();
  renderViewPanel();
  renderSutra();
}

function renderHuixiang() {
  const el = document.getElementById('huixiangBody');
  const item = (v) => {
    const note = v.note ? ` (${t(v.note)})` : '';
    return `<div class="hx-item"><div class="hx-h">${escapeHtml(v.h)}</div><div class="hx-l">${escapeHtml(v.l)}${escapeHtml(note)}</div></div>`;
  };
  let html = '';
  html += `<div class="hx-title">${escapeHtml(HUIXIANG.title)}</div>`;
  html += `<div class="hx-subtitle">${escapeHtml(HUIXIANG.titlePinyin)} — ${escapeHtml(HUIXIANG.titleMeaning)}</div>`;
  html += HUIXIANG.left.map(item).join('');
  html += `<div class="hx-col">${t('rightColumn')}</div>`;
  html += HUIXIANG.right.map(item).join('');
  html += `<div class="hx-col">${t('closingVerse')}</div>`;
  html += HUIXIANG.closing.map(item).join('');
  el.innerHTML = html;
}

function renderChangelog() {
  const el = document.getElementById('changelogBody');
  document.getElementById('menuVersion').textContent = 'v' + APP_VERSION;
  el.innerHTML = CHANGELOG.map((entry) => {
    const items = entry.changes.map((c) => `<li>${escapeHtml(c)}</li>`).join('');
    return `
      <div class="cl-entry">
        <div class="cl-version">v${escapeHtml(entry.version)}</div>
        <ul class="cl-list">${items}</ul>
      </div>`;
  }).join('');
}

function renderLog() {
  const list = document.getElementById('logList');
  if (state.logs.length === 0) {
    list.innerHTML = `<div class="log-empty">${t('emptyLog')}</div>`;
    return;
  }
  list.innerHTML = state.logs.map((log, i) => {
    const sutra = SUTRAS[log.sutra];
    const sutraLabel = sutra ? sutra.short : (log.sutra || '?');
    const note = log.note ? `<div class="log-note">${escapeHtml(log.note)}</div>` : '';
    return `
      <div class="log-entry">
        <div class="log-top">
          <span class="log-count">${log.count}</span>
          <span class="log-sutra">${escapeHtml(sutraLabel)}</span>
          <span class="log-date">${formatDate(log.date)}</span>
          <button class="log-del" data-index="${i}" title="Delete">🗑</button>
        </div>
        ${note}
      </div>`;
  }).join('');

  list.querySelectorAll('.log-del').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index, 10);
      state.cumulativeTotal = Math.max(0, state.cumulativeTotal - state.logs[idx].count);
      state.logs.splice(idx, 1);
      saveState();
      renderCounter();
      renderLog();
    });
  });
}

function openModal(id) {
  document.getElementById(id).classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

/* Auto-scroll */
function startAutoScroll() {
  if (scrollTimer) return;
  state.autoScroll = true;
  saveState();
  scrollTimer = setInterval(() => {
    const r = document.getElementById('reader');
    r.scrollTop += SPEED_STEPS[state.scrollSpeed - 1] || 0.8;
    if (r.scrollTop + r.clientHeight >= r.scrollHeight - 4) {
      stopAutoScroll();
    }
  }, 40);
  updateAutoScrollBtn();
}

function stopAutoScroll() {
  if (scrollTimer) {
    clearInterval(scrollTimer);
    scrollTimer = null;
  }
  state.autoScroll = false;
  saveState();
  updateAutoScrollBtn();
}

function updateAutoScrollBtn() {
  const btn = document.getElementById('autoScrollBtn');
  const icon = document.getElementById('autoScrollIcon');
  btn.classList.toggle('running', state.autoScroll);
  icon.textContent = state.autoScroll ? '⏸' : '▶';
}

function init() {
  applyI18n();
  applyTheme();
  renderAll();
  renderHuixiang();
  renderChangelog();
  updateAutoScrollBtn();

  document.getElementById('tapBtn').addEventListener('click', () => {
    setCount(currentCount() + 1);
    vibrate(15);
    saveState();
    renderCounter();
  });

  document.getElementById('undoBtn').addEventListener('click', () => {
    if (currentCount() > 0) {
      setCount(currentCount() - 1);
      saveState();
      renderCounter();
    }
  });

  document.getElementById('resetBtn').addEventListener('click', () => {
    setCount(0);
    saveState();
    renderCounter();
  });

  document.querySelectorAll('.sutra-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      state.sutra = tab.dataset.sutra;
      stopAutoScroll();
      const reader = document.getElementById('reader');
      reader.scrollTop = 0;
      saveState();
      renderAll();
    });
  });

  document.getElementById('fontMinus').addEventListener('click', () => {
    state.fontSize = Math.max(14, state.fontSize - 2);
    saveState();
    renderSutra();
  });

  document.getElementById('fontPlus').addEventListener('click', () => {
    state.fontSize = Math.min(40, state.fontSize + 2);
    saveState();
    renderSutra();
  });

  document.getElementById('themeBtn').addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    saveState();
    applyTheme();
  });

  document.getElementById('langBtn').addEventListener('click', () => {
    state.lang = state.lang === 'id' ? 'en' : 'id';
    saveState();
    applyI18n();
    renderSutra();
    renderLog();
    renderHuixiang();
  });

  document.getElementById('viewBtn').addEventListener('click', () => {
    const panel = document.getElementById('viewPanel');
    panel.hidden = !panel.hidden;
  });

  document.querySelectorAll('.chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      const line = chip.dataset.line;
      if (line === 'hanzi') state.showHanzi = !state.showHanzi;
      else if (line === 'pinyin') state.showPinyin = !state.showPinyin;
      else if (line === 'lafal') state.showLafal = !state.showLafal;
      else if (line === 'meaning') state.showMeaning = !state.showMeaning;
      saveState();
      renderViewPanel();
      renderSutra();
    });
  });

  document.getElementById('speedRange').addEventListener('input', (e) => {
    state.scrollSpeed = parseInt(e.target.value, 10);
    document.getElementById('speedValue').textContent = state.scrollSpeed;
    saveState();
  });

  document.getElementById('hapticToggle').addEventListener('change', (e) => {
    state.haptics = e.target.checked;
    saveState();
  });

  document.getElementById('autoScrollBtn').addEventListener('click', () => {
    if (state.autoScroll) stopAutoScroll();
    else startAutoScroll();
  });

  document.getElementById('saveSessionBtn').addEventListener('click', () => {
    if (currentCount() === 0) return;
    document.getElementById('saveValue').textContent = currentCount();
    document.getElementById('noteInput').value = '';
    openModal('saveModal');
  });

  document.getElementById('confirmSaveBtn').addEventListener('click', () => {
    const note = document.getElementById('noteInput').value.trim();
    state.logs.push({
      count: currentCount(),
      sutra: state.sutra,
      note: note || null,
      date: Date.now()
    });
    state.cumulativeTotal += currentCount();
    setCount(0);
    saveState();
    renderCounter();
    closeModal('saveModal');
  });

  document.getElementById('cancelSaveBtn').addEventListener('click', () => closeModal('saveModal'));
  document.getElementById('closeSaveBtn').addEventListener('click', () => closeModal('saveModal'));

  document.getElementById('viewLogBtn').addEventListener('click', () => {
    renderLog();
    openModal('logModal');
  });

  document.getElementById('closeLogBtn').addEventListener('click', () => closeModal('logModal'));
  document.getElementById('closeLogBtn2').addEventListener('click', () => closeModal('logModal'));

  document.getElementById('menuBtn').addEventListener('click', () => openModal('menuModal'));
  document.getElementById('closeMenuBtn').addEventListener('click', () => closeModal('menuModal'));

  document.querySelectorAll('.menu-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      const page = btn.dataset.page;
      closeModal('menuModal');
      if (page === 'about') openModal('aboutModal');
      else if (page === 'huixiang') openModal('huixiangModal');
      else if (page === 'changelog') openModal('changelogModal');
    });
  });

  document.getElementById('closeAboutBtn').addEventListener('click', () => closeModal('aboutModal'));
  document.getElementById('closeAboutBtn2').addEventListener('click', () => closeModal('aboutModal'));
  document.getElementById('closeHuixiangBtn').addEventListener('click', () => closeModal('huixiangModal'));
  document.getElementById('closeHuixiangBtn2').addEventListener('click', () => closeModal('huixiangModal'));
  document.getElementById('closeChangelogBtn').addEventListener('click', () => closeModal('changelogModal'));
  document.getElementById('closeChangelogBtn2').addEventListener('click', () => closeModal('changelogModal'));

  document.getElementById('clearLogBtn').addEventListener('click', () => {
    state.logs = [];
    state.cumulativeTotal = 0;
    saveState();
    renderCounter();
    renderLog();
  });

  document.querySelectorAll('.modal').forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal.id);
    });
  });
}

document.addEventListener('DOMContentLoaded', init);

/* PWA: service worker registration */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch((err) => {
      console.warn('Service worker registration failed', err);
    });
  });
}

/* PWA: install prompt */
let deferredPrompt = null;
const installBtn = document.getElementById('installBtn');

function isIOS() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.textContent = t('install');
  installBtn.style.display = 'inline-block';
});

installBtn.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    installBtn.style.display = 'none';
  } else if (isIOS()) {
    alert('To install on iPhone/iPad:\n1. Tap the Share button\n2. Choose "Add to Home Screen"');
  } else {
    alert('Use your browser menu and choose "Install app" or "Add to Home Screen".');
  }
});

window.addEventListener('appinstalled', () => {
  installBtn.style.display = 'none';
});

if (isIOS() && !isStandalone()) {
  installBtn.textContent = t('install');
  installBtn.style.display = 'inline-block';
}
