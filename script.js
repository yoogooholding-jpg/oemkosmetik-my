const WHATSAPP_NUMBER = "60128255009";
const CONTACT_EMAIL = "hs.biotechnology@gmail.com";
const LANGUAGE_STORAGE_KEY = "oemkosmetik_language";
const INQUIRY_REFERENCE_STORAGE_KEY = "oemkosmetik_inquiry_reference";
const INQUIRY_REFERENCE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const QUALIFIED_FORM_CONVERSION_SEND_TO = window.GOOGLE_ADS_QUALIFIED_FORM_SEND_TO || "";
const TRACKING_KEYS = [
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "ttclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_matchtype",
  "utm_device",
  "utm_network",
  "utm_adgroup",
];

const i18n = {
  ms: {
    metaTitle: "OEM Kosmetik Malaysia | Kilang Private Label Makeup, Lipmatte, Mascara & Eyeshadow",
    metaDescription:
      "Kilang OEM kosmetik Malaysia untuk founder makeup: lipmatte, lipstick, mascara, eyeshadow, cushion, foundation dan private label cosmetics. Bajet mula RM3,000.",
    defaultMessage:
      "Hi, saya berminat dengan OEM kosmetik di Malaysia dan ingin claim RM500 startup voucher. Saya pernah semak/cuba kilang lain dan ingin dapatkan route yang lebih sesuai.",
    quickOpening: "Hi, saya mahu semakan ringkas projek OEM kosmetik.",
    quickLabels: {
      route: "Route diperlukan",
      product: "Produk",
      stage: "Stage projek",
      budget: "Bajet",
      voucher: "Saya berminat claim sehingga RM500 startup voucher jika projek sesuai.",
    },
    formOpening: "Hi, saya ingin semak projek OEM kosmetik saya.",
    formLabels: {
      name: "Nama / Brand",
      phone: "WhatsApp",
      category: "Kategori produk",
      quantity: "Anggaran kuantiti",
      budget: "Bajet permulaan",
      goal: "Matlamat utama founder",
      sellPrice: "Sasaran harga jual",
      voucher: "Voucher: Saya ingin claim RM500 startup voucher",
      support: "Masalah yang dihadapi",
      message: "Mesej",
      notStated: "Tidak dinyatakan",
    },
    sourceDirect: "Lead source: Direct / organic",
    sourceTitle: "Lead source:",
    referenceTitle: "Rujukan projek:",
    text: {
      "brand.sub": "OEM Makeup Partner",
      "nav.builder": "Cara mula",
      "nav.products": "Produk",
      "nav.proof": "Bukti",
      "nav.quote": "Sebutharga",
      "cta.quote": "Dapatkan Quote",
      "cta.project": "Semak Projek Saya",
      "cta.voucher": "Claim Voucher",
      "cta.mobile": "Semak projek di WhatsApp",
      "hero.eyebrow": "Premium OEM makeup untuk founder Malaysia",
      "hero.title": "Bina brand makeup anda sendiri, dari idea hingga produk siap dijual.",
      "hero.copy":
        "Kami bantu founder susun formula, sample, packaging dan production route yang lebih jelas sebelum batch pertama dibuat.",
      "hero.voucher": "Claim sehingga <strong>RM500 startup voucher</strong> untuk projek dengan bajet bermula RM3,000.",
      "quick.kicker": "Semakan projek 60 saat",
      "quick.title": "Empat jawapan dahulu. Kami terus nampak route yang lebih sesuai.",
      "quick.copy": "Pilih route, produk, stage projek dan bajet. WhatsApp akan dibuka dengan ringkasan siap untuk dihantar.",
      "quick.proof1": "Bajet mula RM3,000",
      "quick.proof2": "Balasan manusia",
      "quick.proof3": "Tiada bayaran untuk semakan awal",
      "quick.route": "Route yang anda perlukan",
      "quick.route.oem": "OEM / Brand sendiri",
      "quick.route.ready": "Ready stock / Borong",
      "quick.route.switch": "Tukar kilang / Backup",
      "quick.product": "Produk yang mahu dibuat",
      "quick.stage": "Stage projek sekarang",
      "quick.budget": "Bajet projek",
      "quick.select": "Pilih satu",
      "quick.submit": "Buka semakan di WhatsApp",
      "quick.note": "Jawapan disediakan di WhatsApp. Tekan Send untuk hantar kepada team kami.",
      "builder.kicker": "Brand Launch Studio",
      "builder.title": "Dari idea pertama ke produk yang sedia dilancarkan.",
      "builder.copy": "Satu route yang lebih jelas untuk founder yang mahu bina produk kosmetik sendiri.",
      "builder.1.title": "Idea",
      "builder.1.copy": "Arah brand dan produk",
      "builder.2.title": "Formula",
      "builder.2.copy": "Warna, tekstur dan feel",
      "builder.3.title": "Sample",
      "builder.3.copy": "Semak sebelum batch",
      "builder.4.title": "Packaging",
      "builder.4.copy": "Nampak premium untuk jualan",
      "builder.5.title": "Production",
      "builder.5.copy": "Scale bila sudah proven",
      "hero.panelLabel": "Project review focus",
      "hero.panel1": "Pengalaman industri kosmetik OEM",
      "hero.panel2": "Warna, tekstur, bau, packaging dan sample direction",
      "hero.panel3": "Malaysia local filling + China bulk supply chain",
      "trust.1": "Founder kosmetik",
      "trust.2": "Seller TikTok",
      "trust.3": "Brand Shopee",
      "trust.4": "Salon kecantikan",
      "trust.5": "Brand sedia ada",
      "answer.kicker": "Jawapan cepat untuk founder",
      "answer.title": "OEM kosmetik Malaysia untuk founder yang mahu buat brand makeup sendiri.",
      "answer.copy":
        "HS Biotechnology Sdn Bhd membantu founder semak projek OEM makeup dan private label cosmetics seperti lipmatte, lipstick, mascara, eyeshadow, cushion dan foundation sebelum anda bayar deposit besar. Fokus kami ialah MOQ, unit cost, margin, warna, tekstur, packaging, QC dan route scale production.",
      "answer.card1.title": "Untuk siapa?",
      "answer.card1.copy":
        "Founder baru, seller TikTok, brand Shopee, salon kecantikan dan brand sedia ada yang mahu launch produk makeup sendiri.",
      "answer.card2.title": "Bajet mula?",
      "answer.card2.copy": "Project review sesuai untuk bajet bermula RM3,000, bergantung kepada kategori produk, packaging dan kuantiti.",
      "answer.card3.title": "Masalah utama?",
      "answer.card3.copy": "MOQ terlalu tinggi, harga tidak masuk margin, warna lari, tekstur kurang cantik, sample tidak stabil dan packaging tidak premium.",
      "answer.card4.title": "Output semakan?",
      "answer.card4.copy": "Cadangan route formula, MOQ, packaging, cost direction, QC focus dan pilihan untuk scale bila produk mula bergerak.",
      "decision.kicker": "Founder Decision Panel",
      "decision.title": "Sebelum bayar deposit, founder perlu yakin pada empat perkara ini.",
      "decision.1.title": "Modal terkawal",
      "decision.1.copy": "Batch pertama perlu cukup untuk test market, bukan terlalu besar sampai stok tersangkut.",
      "decision.2.title": "Margin jelas",
      "decision.2.copy": "Unit cost, packaging, MOQ dan route production perlu selari dengan sasaran harga jual.",
      "decision.3.title": "Produk nampak jual",
      "decision.3.copy": "Warna, tekstur, bau, finishing dan packaging mesti nampak sesuai untuk TikTok, Shopee dan repeat customer.",
      "decision.4.title": "Supply boleh scale",
      "decision.4.copy": "Bila produk mula bergerak, repeat order dan bulk production mesti boleh dirancang lebih awal.",
      "pain.kicker": "Masalah yang selalu buat founder rugi",
      "pain.title": "Bukan semua masalah OEM nampak dari quotation pertama.",
      "pain.copy":
        "Founder biasanya mula risau selepas sample tidak sama dengan production, warna tidak kena, tekstur kasar, packaging nampak murah, atau kos sebenar tidak masuk margin. Di sinilah projek perlu disemak sebagai business decision, bukan sekadar order kilang.",
      "pain.list1.title": "MOQ terlalu tinggi",
      "pain.list1.copy": "Modal berat sebelum tahu demand sebenar.",
      "pain.list2.title": "Harga tidak masuk margin",
      "pain.list2.copy": "Kos produk tidak selari dengan harga jual.",
      "pain.list3.title": "Sample tidak konsisten",
      "pain.list3.copy": "Warna, tekstur, bau atau finishing berubah.",
      "pain.list4.title": "Packaging kurang premium",
      "pain.list4.copy": "Produk tidak nampak cukup kuat untuk dijual.",
      "cred.kicker": "Tentang kami",
      "cred.title": "10 tahun pengalaman dalam industri kosmetik, dengan pengalaman bersama banyak brand besar.",
      "cred.copy":
        "Kami melihat projek dari sudut founder: produk perlu nampak profesional, modal perlu terkawal, kualiti perlu stabil, dan supply perlu boleh sambung bila jualan mula naik.",
      "cred.card1": "Pengalaman industri kosmetik OEM dan private label.",
      "cred.card2.title": "Brand besar",
      "cred.card2.copy": "Pernah bekerjasama dengan pelbagai brand kecantikan berskala besar.",
      "cred.card3": "Fokus pada warna, tekstur, packaging, sample direction dan scale route.",
      "video.kicker": "Lihat sebelum WhatsApp",
      "video.title": "Tengok dulu proses dan sample feel. Jika serius mahu buat brand, baru terus semak projek.",
      "video.copy":
        "Video ini bantu founder tapis keputusan lebih awal: adakah anda mahu produk yang nampak lebih premium, semakan warna dan tekstur lebih jelas, serta route production yang boleh disusun sebelum bayar deposit besar.",
      "video.qualifier.title": "Sesuai untuk founder dengan bajet mula RM3,000.",
      "video.qualifier.copy":
        "Jika anda hanya mahu tanya harga paling murah, kami akan bantu bandingkan dahulu sama ada OEM, ready stock atau borong lebih sesuai.",
      "video.cta": "Saya Sudah Tengok, Semak Projek",
      "video.label": "OEM project filter",
      "video.caption.title": "Jika selepas tengok video ini anda masih serius mahu buat produk sendiri, terus WhatsApp untuk semakan projek.",
      "video.caption.copy": "Kami akan semak MOQ, bajet, warna, tekstur, packaging, margin dan route production sebelum anda buat keputusan besar.",
      "products.kicker": "Kategori produk",
      "products.title": "Bina line kosmetik berdasarkan produk yang pelanggan memang beli.",
      "products.1.title": "Makeup & Color Cosmetics",
      "products.1.copy": "Lipmatte, lipstick, lip tint, lip balm, mascara, eyeshadow, eyeliner, cushion, foundation dan item makeup harian.",
      "products.2.title": "Body Care & Fragrance",
      "products.2.copy": "Body lotion, body mist, deodorant, scrub, shower care dan produk bau harian.",
      "products.3.title": "Hair & Hijab Care",
      "products.3.copy": "Hair mist, scalp care, leave-on care, hair serum dan konsep penjagaan rambut mesra hijab.",
      "products.4.title": "Beauty Essentials",
      "products.4.copy": "Cleanser, toner, moisturizer, sunscreen dan produk asas yang mudah repeat order.",
      "keywords.kicker": "Carian produk makeup",
      "keywords.title": "Produk OEM makeup yang founder paling kerap cari.",
      "keywords.copy":
        "Gunakan senarai ini sebagai panduan bila hubungi kami. Jika anda sudah ada sample dari kilang lama, kami boleh semak semula warna, tekstur, packaging, MOQ dan anggaran margin.",
      "stock.title": "Ready stock dan borong:",
      "stock.copy":
        "Kami juga boleh bincang supplier ready stock, ready stock kosmetik, borong kosmetik dan pemborong kosmetik. Untuk founder yang mahu brand sendiri, laluan OEM dan private label tetap lebih sesuai untuk jangka panjang.",
      "packages.kicker": "Pakej OEM",
      "packages.title": "Pilih cara mula mengikut stage brand anda sekarang.",
      "packages.1.tag": "Disyorkan",
      "packages.1.title": "Test Market Batch",
      "packages.1.copy": "Untuk founder yang mahu validasi demand dahulu tanpa terus ambil kuantiti terlalu besar.",
      "packages.1.li1": "Pilihan formula sedia ada",
      "packages.1.li2": "Matching packaging asas",
      "packages.1.li3": "Filling tempatan di Malaysia",
      "packages.1.li4": "Fokus pada kelajuan launch dan feedback market",
      "packages.2.tag": "Custom",
      "packages.2.title": "Baiki Sample",
      "packages.2.copy": "Untuk brand yang sudah ada sample tetapi tidak puas hati dengan warna, tekstur atau packaging.",
      "packages.2.li1": "Arah formula semi-custom",
      "packages.2.li2": "Semakan warna, tekstur dan bau",
      "packages.2.li3": "Panduan packaging dan label",
      "packages.2.li4": "Bantu jadikan produk lebih layak dijual",
      "packages.3.tag": "Bulk",
      "packages.3.title": "Scale Production",
      "packages.3.copy": "Untuk produk yang sudah bergerak dan perlukan kos lebih baik serta supply lebih stabil.",
      "packages.3.li1": "Opsyen bulk production kilang China",
      "packages.3.li2": "Cost optimization ikut volume",
      "packages.3.li3": "Sokongan supply chain packaging",
      "packages.3.li4": "Perancangan repeat order supaya tidak putus stok",
      "process.kicker": "Proses",
      "process.title": "Dari idea atau sample lama ke stok pertama yang lebih masuk akal untuk dijual.",
      "process.1.title": "Ceritakan masalah",
      "process.1.copy": "Kongsi produk, sample lama, MOQ, bajet, target market, harga jual dan isu yang anda hadapi.",
      "process.2.title": "Semak route terbaik",
      "process.2.copy": "Kami susun pilihan formula, packaging, MOQ dan anggaran kos supaya margin lebih jelas.",
      "process.3.title": "Batch test market",
      "process.3.copy": "Gunakan batch yang sesuai untuk cuba pasaran, kumpul feedback dan elak stok terlalu berat.",
      "process.4.title": "Scale bila sudah laku",
      "process.4.copy": "SKU yang sudah proven boleh masuk bulk production, cost optimization dan repeat order planning.",
      "faq.kicker": "FAQ OEM kosmetik",
      "faq.title": "Soalan yang biasanya founder tanya sebelum mula projek makeup.",
      "faq.1.q": "Apa itu OEM kosmetik Malaysia?",
      "faq.1.a": "OEM kosmetik ialah servis untuk membuat produk kosmetik jenama sendiri, termasuk formula, warna, tekstur, packaging, filling, QC dan route scale production.",
      "faq.2.q": "Adakah anda fokus makeup atau skincare?",
      "faq.2.a":
        "Kami profesional dalam kosmetik dan color cosmetics. Fokus halaman ini ialah makeup seperti lipmatte, lipstick, mascara, eyeshadow, cushion, foundation, powder, blusher dan highlighter.",
      "faq.3.q": "Berapakah bajet permulaan untuk projek OEM makeup?",
      "faq.3.a": "Bajet projek bermula sekitar RM3,000. Kos sebenar bergantung kepada kategori produk, kuantiti, packaging, formula dan route production yang dipilih.",
      "faq.4.q": "Boleh buat lipmatte, mascara, eyeshadow atau foundation?",
      "faq.4.a": "Ya. Produk yang boleh disemak termasuk lipmatte, lipstick, lip tint, mascara, eyeshadow, eyeliner, eyebrow, cushion, foundation, BB cream, CC cream, concealer dan powder.",
      "faq.5.q": "Kalau saya pernah kecewa dengan kilang lain, boleh semak semula?",
      "faq.5.a": "Boleh. Kami boleh semak isu MOQ, kos, warna, tekstur, bau, finishing, packaging, sample consistency dan sama ada produk itu sesuai untuk dijual semula.",
      "faq.6.q": "Adakah ada ready stock atau borong kosmetik?",
      "faq.6.a": "Ready stock dan borong kosmetik boleh dibincangkan. Jika objektif anda ialah bina brand sendiri, kami akan bantu bandingkan laluan ready stock, OEM dan private label.",
      "form.kicker": "Project Review Form",
      "form.title": "Beritahu kami apa yang anda mahu capai sebagai founder.",
      "form.copy": "Isi ringkas sahaja. Kami akan semak kategori produk, masalah sample, MOQ, bajet, sasaran harga jual dan route production yang lebih sesuai.",
      "form.voucher": "<strong>Promo projek baru:</strong> Claim sehingga RM500 startup voucher untuk bajet bermula RM3,000.",
      "form.check.title": "Apa yang kami semak untuk anda",
      "form.check.1": "MOQ dan batch pertama yang lebih terkawal",
      "form.check.2": "Unit cost, margin dan sasaran harga jual",
      "form.check.3": "Isu sample: warna, tekstur, bau dan finishing",
      "form.check.4": "Packaging, QC route dan scale production plan",
      "form.name": "Nama anda",
      "form.name.placeholder": "Nama / Nama brand",
      "form.phone": "Nombor WhatsApp",
      "form.category": "Kategori produk",
      "form.quantity": "Anggaran kuantiti",
      "form.budget": "Bajet permulaan",
      "form.goal": "Matlamat utama founder",
      "form.sellPrice": "Sasaran harga jual",
      "form.sellPrice.placeholder": "Contoh: RM39 / RM59 / RM89",
      "form.problem": "Masalah yang anda hadapi",
      "form.problem.1": "MOQ terlalu tinggi",
      "form.problem.2": "Harga terlalu mahal",
      "form.problem.3": "Warna / tekstur tidak cantik",
      "form.problem.4": "Kualiti tidak stabil",
      "form.problem.5": "Packaging kurang premium",
      "form.problem.6": "Perlu NPRA / Halal",
      "form.message": "Ceritakan isu produk anda",
      "form.message.placeholder": "Contoh: Saya sudah cuba kilang lain untuk lip tint, tapi warna tidak cantik dan MOQ terlalu tinggi.",
      "form.submit": "Hantar Untuk Semakan",
      "form.note": "Permintaan anda akan dibuka di WhatsApp dengan detail siap untuk dihantar.",
      "form.select.one": "Pilih satu",
      "form.select.moq": "Pilih range MOQ",
      "form.select.budget": "Pilih bajet",
      "form.select.goal": "Pilih matlamat",
      "footer.copy": "OEM Kosmetik Malaysia · Private Label · Local Filling · Scale Production",
      "footer.whatsapp": "Konsultasi WhatsApp",
    },
  },
  en: {
    metaTitle: "OEM Cosmetics Malaysia | Private Label Makeup Factory for Founders",
    metaDescription:
      "Malaysia cosmetic OEM partner for makeup founders: lipmatte, lipstick, mascara, eyeshadow, cushion, foundation and private label cosmetics. Budget starts from RM3,000.",
    defaultMessage:
      "Hi, I am interested in OEM cosmetics in Malaysia and would like to claim the RM500 startup voucher. I have checked/tried another factory before and want a clearer production route.",
    quickOpening: "Hi, I would like a quick review of my OEM cosmetics project.",
    quickLabels: {
      route: "Route needed",
      product: "Product",
      stage: "Project stage",
      budget: "Budget",
      voucher: "I am interested in claiming up to RM500 startup voucher if the project is suitable.",
    },
    formOpening: "Hi, I would like to review my OEM cosmetics project.",
    formLabels: {
      name: "Name / Brand",
      phone: "WhatsApp",
      category: "Product category",
      quantity: "Estimated quantity",
      budget: "Starting budget",
      goal: "Main founder goal",
      sellPrice: "Target selling price",
      voucher: "Voucher: I would like to claim the RM500 startup voucher",
      support: "Problems faced",
      message: "Message",
      notStated: "Not stated",
    },
    sourceDirect: "Lead source: Direct / organic",
    sourceTitle: "Lead source:",
    referenceTitle: "Project reference:",
    text: {
      "brand.sub": "OEM Makeup Partner",
      "nav.builder": "How it works",
      "nav.products": "Products",
      "nav.proof": "Proof",
      "nav.quote": "Quote",
      "cta.quote": "Get Quote",
      "cta.project": "Review My Project",
      "cta.voucher": "Claim Voucher",
      "cta.mobile": "Review via WhatsApp",
      "hero.eyebrow": "Premium OEM makeup for Malaysia founders",
      "hero.title": "Build your own makeup brand, from first idea to sellable product.",
      "hero.copy":
        "We help founders map formula, sample, packaging and production routes before the first batch is made.",
      "hero.voucher": "Claim up to <strong>RM500 startup voucher</strong> for projects with budget starting from RM3,000.",
      "quick.kicker": "60-second project check",
      "quick.title": "Four answers first. We can immediately see a more suitable route.",
      "quick.copy": "Choose your route, product, project stage and budget. WhatsApp will open with a ready-to-send summary.",
      "quick.proof1": "Budget starts from RM3,000",
      "quick.proof2": "Human response",
      "quick.proof3": "No charge for the initial review",
      "quick.route": "Route you need",
      "quick.route.oem": "OEM / Own brand",
      "quick.route.ready": "Ready stock / Wholesale",
      "quick.route.switch": "Switch factory / Backup",
      "quick.product": "Product you want to make",
      "quick.stage": "Current project stage",
      "quick.budget": "Project budget",
      "quick.select": "Choose one",
      "quick.submit": "Open review in WhatsApp",
      "quick.note": "Your answers will be prepared in WhatsApp. Tap Send to contact our team.",
      "builder.kicker": "Brand Launch Studio",
      "builder.title": "From the first idea to a product ready to launch.",
      "builder.copy": "A clearer route for founders who want to build their own cosmetic products.",
      "builder.1.title": "Idea",
      "builder.1.copy": "Brand and product direction",
      "builder.2.title": "Formula",
      "builder.2.copy": "Colour, texture and feel",
      "builder.3.title": "Sample",
      "builder.3.copy": "Review before the batch",
      "builder.4.title": "Packaging",
      "builder.4.copy": "Premium enough to sell",
      "builder.5.title": "Production",
      "builder.5.copy": "Scale when proven",
      "hero.panelLabel": "Project review focus",
      "hero.panel1": "10+ years of cosmetic OEM industry experience",
      "hero.panel2": "Colour, texture, scent, packaging and sample direction",
      "hero.panel3": "Malaysia local filling + China bulk supply chain",
      "trust.1": "Cosmetic founders",
      "trust.2": "TikTok sellers",
      "trust.3": "Shopee brands",
      "trust.4": "Beauty salons",
      "trust.5": "Existing brands",
      "answer.kicker": "Fast answer for founders",
      "answer.title": "OEM cosmetics Malaysia for founders who want to build their own makeup brand.",
      "answer.copy":
        "HS Biotechnology Sdn Bhd helps founders review OEM makeup and private label cosmetics projects such as lipmatte, lipstick, mascara, eyeshadow, cushion and foundation before paying a large deposit. We focus on MOQ, unit cost, margin, colour, texture, packaging, QC and scalable production routes.",
      "answer.card1.title": "Who is it for?",
      "answer.card1.copy": "New founders, TikTok sellers, Shopee beauty brands, salons and existing brands that want to launch their own makeup line.",
      "answer.card2.title": "Starting budget?",
      "answer.card2.copy": "Project review is suitable for budgets starting from RM3,000, depending on product category, packaging and quantity.",
      "answer.card3.title": "Main problems?",
      "answer.card3.copy": "MOQ too high, cost does not fit margin, colour mismatch, weak texture, unstable samples and packaging that does not look premium.",
      "answer.card4.title": "Review output?",
      "answer.card4.copy": "Formula route, MOQ, packaging, cost direction, QC focus and scale options once the product starts moving.",
      "decision.kicker": "Founder Decision Panel",
      "decision.title": "Before paying a deposit, founders should be clear on these four points.",
      "decision.1.title": "Controlled capital",
      "decision.1.copy": "The first batch should be enough to test the market, not so large that stock becomes stuck.",
      "decision.2.title": "Clear margin",
      "decision.2.copy": "Unit cost, packaging, MOQ and production route must match your target selling price.",
      "decision.3.title": "Product looks sellable",
      "decision.3.copy": "Colour, texture, scent, finish and packaging must work for TikTok, Shopee and repeat customers.",
      "decision.4.title": "Supply can scale",
      "decision.4.copy": "When the product starts selling, repeat orders and bulk production should already be planned.",
      "pain.kicker": "Problems that cost founders money",
      "pain.title": "Not every OEM problem is visible from the first quotation.",
      "pain.copy":
        "Founders usually start worrying when production does not match the sample, colours are off, texture feels rough, packaging looks cheap or real cost does not fit the margin. This is where the project needs to be reviewed as a business decision, not just a factory order.",
      "pain.list1.title": "MOQ too high",
      "pain.list1.copy": "Capital becomes heavy before real demand is proven.",
      "pain.list2.title": "Cost does not fit margin",
      "pain.list2.copy": "Product cost does not match your selling price.",
      "pain.list3.title": "Sample inconsistency",
      "pain.list3.copy": "Colour, texture, scent or finish changes.",
      "pain.list4.title": "Packaging not premium",
      "pain.list4.copy": "The product does not look strong enough to sell.",
      "cred.kicker": "About us",
      "cred.title": "10 years of cosmetic industry experience, with experience working with many larger brands.",
      "cred.copy":
        "We review projects from the founder's perspective: the product must look professional, capital must be controlled, quality must be stable, and supply must continue when sales start growing.",
      "cred.card1": "Experience in cosmetic OEM and private label.",
      "cred.card2.title": "Large brands",
      "cred.card2.copy": "Experience working with multiple beauty brands at larger scale.",
      "cred.card3": "Focus on colour, texture, packaging, sample direction and scale route.",
      "video.kicker": "Watch before WhatsApp",
      "video.title": "Watch the process and sample feel first. If you are serious about building a brand, then review the project.",
      "video.copy":
        "This video helps founders filter decisions earlier: whether you want a product that looks premium, clearer colour and texture review, and a production route planned before paying a large deposit.",
      "video.qualifier.title": "Suitable for founders with budget starting from RM3,000.",
      "video.qualifier.copy": "If you only want the cheapest price, we will first help compare whether OEM, ready stock or wholesale is more suitable.",
      "video.cta": "I Watched It, Review My Project",
      "video.label": "OEM project filter",
      "video.caption.title": "If you are still serious after watching this video, WhatsApp us to review your project.",
      "video.caption.copy": "We will review MOQ, budget, colour, texture, packaging, margin and production route before you make a big decision.",
      "products.kicker": "Product categories",
      "products.title": "Build a cosmetic line around products customers actually buy.",
      "products.1.title": "Makeup & Color Cosmetics",
      "products.1.copy": "Lipmatte, lipstick, lip tint, lip balm, mascara, eyeshadow, eyeliner, cushion, foundation and daily makeup items.",
      "products.2.title": "Body Care & Fragrance",
      "products.2.copy": "Body lotion, body mist, deodorant, scrub, shower care and daily fragrance products.",
      "products.3.title": "Hair & Hijab Care",
      "products.3.copy": "Hair mist, scalp care, leave-on care, hair serum and hijab-friendly hair care concepts.",
      "products.4.title": "Beauty Essentials",
      "products.4.copy": "Cleanser, toner, moisturizer, sunscreen and essential products that are easier to repeat order.",
      "keywords.kicker": "Makeup product searches",
      "keywords.title": "OEM makeup products founders most often search for.",
      "keywords.copy":
        "Use this list as a guide when contacting us. If you already have a sample from a previous factory, we can review colour, texture, packaging, MOQ and estimated margin again.",
      "stock.title": "Ready stock and wholesale:",
      "stock.copy":
        "We can also discuss supplier ready stock, ready stock cosmetics, wholesale cosmetics and cosmetic wholesalers. For founders building their own brand, OEM and private label are still more suitable for long-term positioning.",
      "packages.kicker": "OEM packages",
      "packages.title": "Choose a starting route based on your brand stage now.",
      "packages.1.tag": "Recommended",
      "packages.1.title": "Test Market Batch",
      "packages.1.copy": "For founders who want to validate demand first without taking too much quantity.",
      "packages.1.li1": "Existing formula options",
      "packages.1.li2": "Basic packaging matching",
      "packages.1.li3": "Local filling in Malaysia",
      "packages.1.li4": "Focus on faster launch and market feedback",
      "packages.2.tag": "Custom",
      "packages.2.title": "Improve Sample",
      "packages.2.copy": "For brands that already have a sample but are not satisfied with colour, texture or packaging.",
      "packages.2.li1": "Semi-custom formula direction",
      "packages.2.li2": "Colour, texture and scent review",
      "packages.2.li3": "Packaging and label guidance",
      "packages.2.li4": "Help make the product more sellable",
      "packages.3.tag": "Bulk",
      "packages.3.title": "Scale Production",
      "packages.3.copy": "For products already selling and needing better cost and more stable supply.",
      "packages.3.li1": "China bulk production option",
      "packages.3.li2": "Cost optimization by volume",
      "packages.3.li3": "Packaging supply chain support",
      "packages.3.li4": "Repeat order planning to avoid stockout",
      "process.kicker": "Process",
      "process.title": "From idea or old sample to a first stock batch that makes more business sense.",
      "process.1.title": "Tell us the problem",
      "process.1.copy": "Share your product, old sample, MOQ, budget, target market, selling price and issues faced.",
      "process.2.title": "Review the best route",
      "process.2.copy": "We map formula, packaging, MOQ and estimated cost options so margin is clearer.",
      "process.3.title": "Test market batch",
      "process.3.copy": "Use a suitable batch to test the market, collect feedback and avoid heavy stock.",
      "process.4.title": "Scale when it sells",
      "process.4.copy": "Proven SKUs can move into bulk production, cost optimization and repeat order planning.",
      "faq.kicker": "OEM cosmetics FAQ",
      "faq.title": "Questions founders usually ask before starting a makeup project.",
      "faq.1.q": "What is OEM cosmetics Malaysia?",
      "faq.1.a": "OEM cosmetics is a service for creating your own brand cosmetics, including formula, colour, texture, packaging, filling, QC and scale production route.",
      "faq.2.q": "Do you focus on makeup or skincare?",
      "faq.2.a": "We are professional in cosmetics and color cosmetics. This page focuses on makeup such as lipmatte, lipstick, mascara, eyeshadow, cushion, foundation, powder, blusher and highlighter.",
      "faq.3.q": "What is the starting budget for OEM makeup?",
      "faq.3.a": "Project budget starts around RM3,000. Actual cost depends on product category, quantity, packaging, formula and production route selected.",
      "faq.4.q": "Can you do lipmatte, mascara, eyeshadow or foundation?",
      "faq.4.a": "Yes. Products that can be reviewed include lipmatte, lipstick, lip tint, mascara, eyeshadow, eyeliner, eyebrow, cushion, foundation, BB cream, CC cream, concealer and powder.",
      "faq.5.q": "If I was disappointed by another factory, can you review it again?",
      "faq.5.a": "Yes. We can review MOQ, cost, colour, texture, scent, finish, packaging, sample consistency and whether the product is suitable to sell again.",
      "faq.6.q": "Do you have ready stock or wholesale cosmetics?",
      "faq.6.a": "Ready stock and wholesale cosmetics can be discussed. If your objective is building your own brand, we will help compare ready stock, OEM and private label routes.",
      "form.kicker": "Project Review Form",
      "form.title": "Tell us what you want to achieve as a founder.",
      "form.copy": "Fill in a short form. We will review product category, sample problem, MOQ, budget, target selling price and a more suitable production route.",
      "form.voucher": "<strong>New project promo:</strong> Claim up to RM500 startup voucher for budgets starting from RM3,000.",
      "form.check.title": "What we review for you",
      "form.check.1": "MOQ and a more controlled first batch",
      "form.check.2": "Unit cost, margin and target selling price",
      "form.check.3": "Sample issues: colour, texture, scent and finish",
      "form.check.4": "Packaging, QC route and scale production plan",
      "form.name": "Your name",
      "form.name.placeholder": "Name / Brand name",
      "form.phone": "WhatsApp number",
      "form.category": "Product category",
      "form.quantity": "Estimated quantity",
      "form.budget": "Starting budget",
      "form.goal": "Main founder goal",
      "form.sellPrice": "Target selling price",
      "form.sellPrice.placeholder": "Example: RM39 / RM59 / RM89",
      "form.problem": "Problems you face",
      "form.problem.1": "MOQ too high",
      "form.problem.2": "Price too expensive",
      "form.problem.3": "Colour / texture not good",
      "form.problem.4": "Quality unstable",
      "form.problem.5": "Packaging not premium",
      "form.problem.6": "Need NPRA / Halal",
      "form.message": "Tell us your product issue",
      "form.message.placeholder": "Example: I tried another factory for lip tint, but the colour was not good and MOQ was too high.",
      "form.submit": "Send For Review",
      "form.note": "Your request will open in WhatsApp with the details ready to send.",
      "form.select.one": "Choose one",
      "form.select.moq": "Choose MOQ range",
      "form.select.budget": "Choose budget",
      "form.select.goal": "Choose goal",
      "footer.copy": "OEM Cosmetics Malaysia · Private Label · Local Filling · Scale Production",
      "footer.whatsapp": "WhatsApp Consultation",
    },
  },
};

let currentLang = getInitialLanguage();

function getInitialLanguage() {
  const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return saved === "en" || saved === "ms" ? saved : "ms";
}

function getTrackingSource() {
  const params = new URLSearchParams(window.location.search);
  const savedSource = {};

  TRACKING_KEYS.forEach((key) => {
    const value = params.get(key) || sessionStorage.getItem(`lead_${key}`);
    if (value) {
      savedSource[key] = value;
      sessionStorage.setItem(`lead_${key}`, value);
    }
  });

  return savedSource;
}

function getInquirySourceCode(source) {
  const utmSource = String(source.utm_source || "").toLowerCase();
  const utmMedium = String(source.utm_medium || "").toLowerCase();

  if (
    source.gclid
    || source.gbraid
    || source.wbraid
    || (utmSource.includes("google") && /(cpc|ppc|paid)/.test(utmMedium))
  ) {
    return "G";
  }
  if (source.ttclid || utmSource.includes("tiktok")) return "T";
  if (utmSource.includes("outbound")) return "O";
  if (utmSource.includes("seo") || /(organic|seo)/.test(utmMedium)) return "S";
  return "D";
}

function getMalaysiaDateCode() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kuala_Lumpur",
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}${values.month}${values.day}`;
}

function getRandomReferenceCode(length = 6) {
  const bytes = new Uint8Array(length);
  if (window.crypto && typeof window.crypto.getRandomValues === "function") {
    window.crypto.getRandomValues(bytes);
  } else {
    for (let index = 0; index < bytes.length; index += 1) {
      bytes[index] = Math.floor(Math.random() * 256);
    }
  }
  return Array.from(
    bytes,
    (value) => INQUIRY_REFERENCE_ALPHABET[value % INQUIRY_REFERENCE_ALPHABET.length],
  ).join("");
}

function getInquiryReference() {
  const sourceCode = getInquirySourceCode(getTrackingSource());
  const saved = sessionStorage.getItem(INQUIRY_REFERENCE_STORAGE_KEY);
  if (saved && saved.startsWith(`HS-${sourceCode}-`)) return saved;

  const dateCode = getMalaysiaDateCode();
  const randomCode = getRandomReferenceCode();
  const reference = `HS-${sourceCode}-${dateCode}-${randomCode}`;
  sessionStorage.setItem(INQUIRY_REFERENCE_STORAGE_KEY, reference);
  return reference;
}

function buildSourceLines() {
  const copy = i18n[currentLang];
  const source = getTrackingSource();
  const entries = Object.entries(source);
  const referenceLine = `${copy.referenceTitle} ${getInquiryReference()}`;
  const pageContext = [
    `- landing_page: ${window.location.pathname}`,
    `- language: ${currentLang === "en" ? "en-MY" : "ms-MY"}`,
  ];

  if (!entries.length) {
    return [referenceLine, copy.sourceDirect, ...pageContext];
  }

  return [
    referenceLine,
    copy.sourceTitle,
    ...pageContext,
    ...entries.map(([key, value]) => `- ${key}: ${value}`),
  ];
}

function buildWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message || i18n[currentLang].defaultMessage);
  const number = WHATSAPP_NUMBER.replace(/[^\d]/g, "");
  return number ? `https://wa.me/${number}?text=${encoded}` : `https://wa.me/?text=${encoded}`;
}

function trackLeadEvent(eventName, properties = {}) {
  const source = getTrackingSource();
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    lead_channel: "whatsapp",
    inquiry_reference: getInquiryReference(),
    business: "oem_kosmetik_malaysia",
    language: currentLang,
    ...source,
    ...properties,
  });
}

function trackTikTokEvent(eventName, properties = {}) {
  if (!window.ttq || typeof window.ttq.track !== "function") return;

  window.ttq.track(eventName, {
    content_type: "service",
    content_name: "oem_kosmetik_malaysia",
    language: currentLang,
    ...properties,
  });
}

function trackQualifiedFormConversion(eventName, callback) {
  trackLeadEvent(eventName);

  if (typeof window.gtag !== "function" || !QUALIFIED_FORM_CONVERSION_SEND_TO) {
    callback();
    return;
  }

  let hasNavigated = false;
  const navigate = () => {
    if (hasNavigated) return;
    hasNavigated = true;
    callback();
  };

  window.gtag("event", "conversion", {
    send_to: QUALIFIED_FORM_CONVERSION_SEND_TO,
    value: 1.0,
    currency: "MYR",
    event_callback: navigate,
  });

  window.setTimeout(navigate, 700);
}

function getLocalizedWhatsAppMessage(link) {
  const custom = link.dataset[`whatsappMessage${currentLang === "en" ? "En" : "Ms"}`] || link.dataset.whatsappMessage;
  return custom || i18n[currentLang].defaultMessage;
}

function updateWhatsAppLinks() {
  document.querySelectorAll(".whatsapp-link").forEach((link) => {
    const message = [getLocalizedWhatsAppMessage(link), "", ...buildSourceLines()].join("\n");
    link.setAttribute("href", buildWhatsAppUrl(message));
  });
}

function updateSelectOptions() {
  document.querySelectorAll("option[data-ms][data-en]").forEach((option) => {
    const localized = option.dataset[currentLang] || option.textContent;
    option.textContent = localized;
    option.value = localized;
  });

  document.querySelectorAll('input[name="support"]').forEach((input) => {
    input.value = input.dataset[currentLang] || input.value;
  });

  document.querySelectorAll('input[name="quickRoute"]').forEach((input) => {
    input.value = input.dataset[currentLang] || input.value;
  });
}

function applyLanguage(lang) {
  currentLang = lang === "en" ? "en" : "ms";
  const copy = i18n[currentLang];

  document.documentElement.lang = currentLang === "en" ? "en-MY" : "ms-MY";
  document.title = copy.metaTitle;
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", copy.metaDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (copy.text[key]) {
      element.textContent = copy.text[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (copy.text[key]) {
      element.innerHTML = copy.text[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (copy.text[key]) {
      element.setAttribute("placeholder", copy.text[key]);
    }
  });

  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    const isActive = button.dataset.langSwitch === currentLang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLang);
  updateSelectOptions();
  updateWhatsAppLinks();
}

function getSupportValues(form) {
  return Array.from(form.querySelectorAll('input[name="support"]:checked')).map((item) => item.value);
}

document.querySelectorAll("[data-lang-switch]").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langSwitch);
  });
});

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    updateWhatsAppLinks();
    const targetUrl = link.getAttribute("href");
    trackLeadEvent("whatsapp_click");
    trackTikTokEvent("ClickButton", {
      button_name: "whatsapp",
      button_location: link.className,
    });
    trackTikTokEvent("Contact", {
      contact_type: "whatsapp",
      button_location: link.className,
    });
    window.location.href = targetUrl;
  });
});

document.querySelectorAll(".email-link").forEach((link) => {
  link.setAttribute("href", `mailto:${CONTACT_EMAIL}`);
});

const quoteForm = document.getElementById("quoteForm");
const quickReviewForm = document.getElementById("quickReviewForm");
if (quickReviewForm) {
  quickReviewForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const copy = i18n[currentLang];
    const labels = copy.quickLabels;
    const message = [
      copy.quickOpening,
      "",
      `${labels.route}: ${data.get("quickRoute")}`,
      `${labels.product}: ${data.get("quickProduct")}`,
      `${labels.stage}: ${data.get("quickStage")}`,
      `${labels.budget}: ${data.get("quickBudget")}`,
      labels.voucher,
      "",
      ...buildSourceLines(),
    ].join("\n");

    const targetUrl = buildWhatsAppUrl(message);
    trackLeadEvent("quick_whatsapp_review_open", {
      project_route: data.get("quickRoute"),
      product_category: data.get("quickProduct"),
      budget_range: data.get("quickBudget"),
    });
    trackTikTokEvent("ClickButton", {
      button_name: "quick_review",
      button_location: "quick_review_form",
    });
    trackTikTokEvent("Contact", {
      contact_type: "whatsapp",
      button_location: "quick_review_form",
      project_route: data.get("quickRoute"),
      product_category: data.get("quickProduct"),
      budget_range: data.get("quickBudget"),
    });
    window.location.href = targetUrl;
  });
}

if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const support = getSupportValues(form);
    const copy = i18n[currentLang];
    const labels = copy.formLabels;
    const notStated = labels.notStated;

    const message = [
      copy.formOpening,
      "",
      `${labels.name}: ${data.get("name")}`,
      `${labels.phone}: ${data.get("phone")}`,
      `${labels.category}: ${data.get("category")}`,
      `${labels.quantity}: ${data.get("quantity")}`,
      `${labels.budget}: ${data.get("budget")}`,
      `${labels.goal}: ${data.get("goal")}`,
      `${labels.sellPrice}: ${data.get("sellPrice") || notStated}`,
      labels.voucher,
      `${labels.support}: ${support.length ? support.join(", ") : notStated}`,
      `${labels.message}: ${data.get("message") || notStated}`,
      "",
      ...buildSourceLines(),
    ].join("\n");

    const targetUrl = buildWhatsAppUrl(message);
    trackTikTokEvent("Lead", {
      form_name: "project_review",
      product_category: data.get("category"),
      budget_range: data.get("budget"),
    });
    trackQualifiedFormConversion("qualified_whatsapp_form_submit", () => {
      window.location.href = targetUrl;
    });
  });
}

applyLanguage(currentLang);
