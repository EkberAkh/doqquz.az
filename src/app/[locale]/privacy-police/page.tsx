import { Box, Text, Heading, Container } from "@chakra-ui/react";
// import { extendTheme } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React from "react";
//

const Privacy = () => {
  const t = useTranslations();
  return (
    <Container bg="white">
      <Box>
        <Heading>{t("PrivacyPolice.header")}</Heading>
        <Text>
          {t.rich("Auth.Login.subTitle", {
            span: (chunks) => <span>{chunks}</span>,
            b: (chunks) => <b>{chunks}</b>,
          })}
        </Text>
        <br />
        <Heading as="b" size="xl">
          1. Hansı məlumatları toplayırıq?
        </Heading>
        <Text as="b" fontSize="large">
          <Heading as="h2" fontSize="xl">
            {" "}
            Bizə açıqladığınız şəxsi məlumatları
          </Heading>
        </Text>
        <br />
        <Text>Xülasə: Bizə təqdim etdiyiniz şəxsi məlumatları toplayırıq.</Text>
        <br />
        <Text as="b" fontSize="2xl">
          2. MƏLUMATLARINIZI NECƏ İSTİFADƏ EDİRİK?
        </Text>
        <br />
        <Text>
          Veb saytımız vasitəsilə toplanan şəxsi məlumatları aşağıda təsvir
          olunan müxtəlif iş məqsədləri üçün istifadə edirik. Şəxsi
          məlumatlarınızı qanuni iş maraqlarımıza əsaslanaraq, sizinlə
          razılaşdırılmış müqavilə bağlamaqla və ya yerinə yetirmək üçün nəzərdə
          tutulmuş qanuni öhdəliklərimizə uyğun olaraq işləyirik. Aşağıda
          sadalanan hər bir məqsədin yanında güvəndiyimiz xüsusi işləmə
          əsaslarını göstəririk.
          <br />
          Topladığımız və ya aldığımız məlumatlardan istifadə edirik:
          <br />
          Hesab yaratma və giriş prosesini asanlaşdırmaq üçün. Veb saytımızdakı
          hesabınızı üçüncü tərəf hesabına (məsələn, Google və ya Facebook
          hesabınıza) bağlamağı seçsəniz, hesabın yaradılması və giriş müddətini
          asanlaşdırmaq üçün bu üçüncü şəxslərdən toplamağımıza icazə verdiyiniz
          məlumatları istifadə edirik. Əlavə məlumat üçün aşağıdakı: "SOSİAL
          HESAB GİRİŞLƏRİNİZİ NECƏ İSTİFADƏ EDİRİK?" başlıqlı bölməyə baxın.{" "}
          <br />
          Rəy bildirmək üçün. Biz şəxsi məlumatları ehtiva edən rəy
          bildirişlərini Veb saytımızda yerləşdirə bilərik. Bir rəy paylaşmazdan
          əvvəl adınızdan və ifadənin məzmunundan istifadə etmək üçün
          razılığınızı alacağıq. Rəyinizi yeniləmək və ya silmək istədikdə,
          xahiş edirik legal@doqquz.az ilə əlaqə saxlayın və adınızı, rəy
          yerləşdirdiyiniz yeri və əlaqə məlumatınızı daxil etdiyinizdən əmin
          olun. <br />
          Geridönüş rəyi istəmək üçün. Məlumatlarınızı geridönüş bildirişi tələb
          etmək və Veb saytımızı istifadə etməyiniz barədə sizinlə əlaqə
          yaratmaq üçün istifadə edə bilərik. <br />
          İstifadəçilər arasında ünsiyyəti təmin etmək üçün. Məlumatlarınızı hər
          bir istifadəçinin razılığı ilə istifadəçilər arası ünsiyyəti təmin
          etmək üçün istifadə edə bilərik. <br />
          İstifadəçi hesablarını idarə etmək üçün. Məlumatlarınızı hesabınızı
          idarə etmək və işlək vəziyyətdə saxlamaq məqsədi ilə istifadə edə
          bilərik. <br />
          Sizə inzibati məlumat göndərmək üçün. Şəxsi məlumatlarınızı sizə
          məhsul, xidmət və yeni xüsusiyyət məlumatlarını və / və ya şərtlər,
          qaydalarvə siyasətimizdəki dəyişiklikləri çatdırmaq üçün istifadə edə
          bilərik. <br /> Xidmətlərimizi qorumaq üçün. Məlumatlarınızı Veb
          saytımızı etibarlı və güvənli tutma səylərimizin bir hissəsi kimi
          istifadə edə bilərik (məsələn, saxtakarlığın izlənməsi və qarşısının
          alınması üçün). <br />
          Şərtlərimizi, qaydalarımızı və siyasətimizi iş məqsədilə icra etmək,
          uyğun qanuni və tənzimləyici tələblər və ya müqaviləmizə əsaslanmaq
          üçün. Qanuni tələblərə cavab vermək və zərərin qarşısını almaq üçün.
          Məhkəmə çağırış vərəqəsi və ya başqa bir qanuni tələb gəlsə, necə
          cavab verəcəyimizi müəyyənləşdirmək üçün əlimizdəki məlumatları
          yoxlamağımız lazım ola bilər. <br /> Başqa iş məqsədləri üçün.
          Məlumatlarınızı informasiya təhlili, istifadə tendensiyalarının
          müəyyənləşdirilməsi, reklam kampaniyalarımızın effektivliyinin müəyyən
          edilməsi və Veb saytımızı, məhsullarımızı, marketinqimizi və
          təcrübənizi qiymətləndirmək və inkişaf etdirmək kimi digər iş
          məqsədləri üçün istifadə edə bilərik. Bu məlumatları fərdi son
          istifadəçilərlə əlaqələndirilməyəcək və şəxsi məlumatları əhatə
          etməyəcək ümumi və anonim şəkildə istifadə edə və saxlaya bilərik.
          Sizin razılığınız olmadan müəyyən edilə bilən şəxsi məlumatlardan
          istifadə etməyəcəyik.
        </Text>
        <Text as="b" fontSize="2xl">
          3. MƏLUMATLARINIZ BAŞQALARIYLA PAYLAŞILACAQMI?
        </Text>{" "}
        <br />
        <Text as="b">
          Xülasə: Məlumatlarınızı qanuni iş maraqlarına, sizinlə bağladığımız
          müqavilənin əsaslarına, qanuni öhdəliklərimizə və / və ya razılığınıza
          uyğun olaraq işləyirik.
        </Text>{" "}
        <Text>
          <br />
          Əlimizdə olan məlumatları aşağıdakı qanuni əsaslara əsasən işləyə və
          ya paylaşa bilərik: Razılıq: Müəyyən bir məqsədlə istifadə etməyimiz
          üçün bizə xüsusi razılıq verdiyiniz halda şəxsi məlumatlarınızı işləyə
          bilərik. <br />
          Qanuni maraqlar: Qanuni iş maraqlarımıza çatmaq üçün lazım olduqda
          məlumatlarınızı işləyə bilərik. <br />
          Müqavilənin icrası: Sizinlə bir müqavilə bağladığımız halda,
          müqaviləmizin şərtlərini yerinə yetirmək üçün şəxsi məlumatlarınızı
          işləyə bilərik. <br />
          Qanuni öhdəliklər: Məhkəmə qərarı və ya məhkəmə çağırışına cavab
          olaraq tətbiq olunan qanuna, dövlət tələblərinə, məhkəmə icraatına,
          məhkəmə qərarına və ya məhkəmə prosesinə riayət etmək üçün qanuni
          olaraq tələb olunan yerdə məlumatlarınızı açıqlaya bilərik ( dövlət
          təhlükəsizlik və ya hüquq-mühafizə tələblərinə cavab verən dövlət
          orqanlarına cavab olaraq). <br />
          Həyati Maraqlar: Məlumatlarınızı siyasətimizi pozmaq, şübhəli
          saxtakarlıq halları, hər hansı bir şəxsin təhlükəsizliyi üçün
          potensial təhdidlər və qeyri-qanuni fəaliyyətlərlə əlaqəli araşdırma
          aparmaq, qarşısını almaq və ya tədbirlər görmək üçün lazım olduğuna
          inandığımız yerlərdə, həmçinin, iştirak etdiyimiz məhkəmə prosesində
          dəlil kimi açıqlaya bilərik. <br />
          Daha spesifik olaraq, aşağıdakı hallarda məlumatlarınızı işləməyimiz
          və ya şəxsi məlumatlarınızı bölüşməyimiz lazım ola bilər: <br />
          Ticarət Transferləri. Məlumatlarınızı hər hansı bir əlaqələndirmə,
          şirkət aktivlərinin satışı, maliyyələşdirilməsi və ya işimizin
          hamısının və ya bir hissəsinin alınması ilə əlaqəli və ya danışıqlar
          zamanı başqa bir şirkətlə paylaşa və ya ötürə bilərik. <br />
          Satıcılar, Məsləhətçilər və digər üçüncü tərəf xidmət təminatçıları.
          Məlumatlarınızı bizim üçün və ya bizim adımızdan xidmət göstərən və bu
          işi görmək üçün bu cür məlumatlara giriş tələb edən üçüncü tərəf
          satıcılar, xidmət təminatçıları, podratçılar və ya agentlərlə bölüşə
          bilərik. Nümunələrə daxildir: ödəmə əməliyyatları, məlumatların
          təhlili, e-poçtun çatdırılması, hosting xidmətləri, müştəri xidmətləri
          və marketinq işləri. Seçilmiş üçüncü şəxslərin Veb saytımızda izləmə
          texnologiyasından istifadə etməsinə icazə verə bilərik ki, bu da veb
          saytımızla zamanla necə qarşılıqlı əlaqədə olduğunuz barədə
          məlumatları adımızdan toplamasına imkan yarada bilər. Bu məlumatlar,
          digər şeylər arasında, məlumatları təhlil etmək və izləmək, müəyyən
          məzmunun, səhifələrin və ya xüsusiyyətlərin populyarlığını
          müəyyənləşdirmək və onlayn fəaliyyəti daha yaxşı başa düşmək üçün
          istifadə edilə bilər. Bu bildirişdə təsvir olunmadığı təqdirdə,
          məlumatlarınızı tanıtmaq məqsədi ilə üçüncü tərəflərlə paylaşmırıq,
          satmırıq, kirayələmirik və ya ticarətini etmirik. Şəxsi
          məlumatlarınızı qorumağı təmin etmək üçün hazırlanan məlumat
          prosessorlarımızla müqavilələrimiz var. Bu o deməkdir ki, biz onlara
          göstəriş vermədiyimiz halda, şəxsi məlumatlarınızla heç bir şey edə
          bilməzlər. Şəxsi məlumatlarınızı bizdən başqa heç bir təşkilatla
          bölüşməyəcəklər. Həmçinin, bizim adımızdan saxladıqları məlumatları
          qorumağa və təlimat verdiyimiz müddət ərzində saxlamağa borcludurlar.{" "}
          <br />
          Digər istifadəçilər. Şəxsi məlumatlarınızı paylaşdığınız zaman
          (məsələn, Veb saytına şərhlər, töhfələr və ya digər məzmun
          göndərməklə) və ya Veb saytın ümumi sahələri ilə qarşılıqlı əlaqə
          qurduğunuzda, bu cür şəxsi məlumatlar bütün istifadəçilər tərəfindən
          görünə bilər və İnternet saytından kənarda açıq şəkildə zaman limiti
          olmadan təqdim edilə bilər. Veb saytımızın digər istifadəçiləri ilə
          qarşılıqlı əlaqə qursanız və hər hansı bir sosial şəbəkə vasitəsilə
          (məsələn, Facebook) veb saytımızda qeydiyyatdan keçsəniz, sosial
          şəbəkədəki əlaqələriniz adınızı, profil şəklinizi və fəaliyyətinizin
          təsvirlərini görəcəkdir. Eynilə, digər istifadəçilər də
          fəaliyyətinizin təsvirlərinə görə, Veb saytımızda sizinlə əlaqə qura
          və profilinizə baxa biləcəklər. <br />
        </Text>
        <Text as="b" fontSize="2xl">
          4. MƏLUMATLARINIZ KİM İLƏ PAYLAŞILACAQ?
        </Text>
        <br />
        <Text as="b">
          Xülasə:Yalnız aşağıdakı üçüncü şəxslərlə məlumat paylaşırıq.
        </Text>
        <Text>
          Yalnız aşağıdakı üçüncü şəxslərə məlumatları açıqlayırıq və
          paylaşırıq.Məlumat toplama və işləmə təcrübələrimizin məqsədini
          asanlıqla başa düşməyiniz üçün hər bir tərəfi kateqoriyalara
          ayırmışıq. Məlumatlarınızı razılığınız əsasında işlətmişiksə və
          razılığınızı ləğv etmək istəyirsinizsə, xahiş edirik, aşağıdakı "BU
          BİLDİRİŞLƏ BAĞLI BİZİMLƏ NECƏ ƏLAQƏ QURA BİLƏRSİNİZ?" başlığındakı
          məlumatları istifadə edərək əlaqə saxlayın.
          <br />
          <b>İstifadəçi Hesabının Qeydiyyatı və Təsdiqlənməsi</b>
          <br />
          Facebook Giriş və Google OAuth 2.0
          <br />
          <b> Veb və Mobil Analitiklər</b>
          <br />
          Google Analitiklər
        </Text>
        <Text as="b" fontSize="2xl">
          5. ÇƏRƏZLƏRDƏN VƏ DİGƏR İZLƏMƏ TEXNOLOGİYALARINDAN İSTİFADƏ EDİRİKMİ?
        </Text>{" "}
        <br />
        <Text as="b">
          Xülasə: Məlumatlarınızı toplamaq və saxlamaq üçün çərəzlərdən və digər
          izləmə texnologiyalarından istifadə edə bilərik.
        </Text>
        <Text>
          Məlumata daxil olmaq və ya saxlamaq üçün çərəzlərdən və oxşar izləmə
          texnologiyalarından (web beacons və pixels kimi) istifadə edə bilərik.
          Bu texnologiyalardan necə istifadə etdiyimiz və müəyyən çərəzlərdən
          necə imtina edə biləcəyiniz barədə spesifik məlumatlar Çərəz
          Bildirişlərimizdə verilmişdir.
        </Text>
        <Text as="b" fontSize="2xl">
          6. SOSİAL GİRİŞLƏRİNİZLƏ NECƏ İŞLƏYİRİK?
        </Text>
        <br />
        <Text as="b">
          Xülasə: Əgər sosial media hesabından istifadə edərək Veb saytımızda
          qeydiyyatdan keçməyi və ya daxil olmağı seçsəniz, sizin haqqınızda
          müəyyən məlumatlara sahib ola bilərik.
        </Text>
        <br />
        <Text>
          Veb saytımız sizə üçüncü tərəf sosial media hesabınızın məlumatlarını
          (Facebook və ya Twitter girişlərinizi) istifadə edərək qeydiyyatdan
          keçmək və giriş imkanı verir. Bunu üsulu seçdiyiniz zaman sosial media
          təminatçınızdan haqqınızda müəyyən profil məlumatları alacağıq.
          Aldığımız profil məlumatları, sosial media təminatçınıza bağlı olaraq
          dəyişə bilər, ancaq çox zaman bu məlumatları adınız, e-poçt adresiniz,
          dostlarınızın siyahısı, profil şəkliniz və bu kimi sosial media
          platformasında ictimaiyyətə açıq etdiyiniz paylaşımlar əhatə edir.{" "}
          <br />
          Aldığımız məlumatları yalnız bu məxfilik bildirişində təsvir olunan və
          ya müvafiq Veb saytında sizə başqa cür açıqlanan məqsədlər üçün
          istifadə edəcəyik. Zəhmət olmasa, şəxsi məlumatlarınızın üçüncü tərəf
          sosial media təminatçınız tərəfindən istifadəsinə nəzarət etmədiyimizi
          və cavabdeh olmadığımızı nəzərə alın. Şəxsi məlumatlarınızı necə
          topladıqlarını, istifadə etdiklərini və paylaşdıqlarını və saytlarında
          və tətbiqlərində gizlilik seçimlərinizi necə qura biləcəyinizi anlamaq
          üçün gizlilik bildirişlərini nəzərdən keçirməyinizi tövsiyə edirik.
        </Text>{" "}
        <br />
        <Text as="b" fontSize="2xl">
          7. MƏLUMATLARINIZI HANSI MÜDDƏTDƏ SAXLAYACAĞIQ?
        </Text>{" "}
        <br />
        <Text as="b">
          Xülasə: Qanunla başqa cür şərt qoyulmayıbsa, məlumatlarınızı bu
          məxfilik bildirişində göstərilən məqsədləri yerinə yetirmək üçün lazım
          olan müddətə saxlayırıq.
        </Text>{" "}
        <br />
        <Text>
          Şəxsi məlumatlarınızı qanunla daha uzun bir saxlama müddəti tələb
          olunmadığı və ya icazə vermədiyi hallar (vergi, mühasibat və ya digər
          qanuni tələblər kimi) istisna olmaqla, yalnız bu məxfilik bildirişində
          göstərilən məqsədlər üçün lazım olduğu müddətdə saxlayacağıq. Bu
          bildirişdə heç bir səbəb şəxsi məlumatlarınızı istifadəçilərin bizimlə
          hesabı olduğu müddətdən daha uzun müddət saxlamağımızı tələb
          etməyəcəkdir.
          <br />
          Şəxsi məlumatlarınızı işləmək üçün davam edən qanuni bir işimiz
          olmadıqda, bu məlumatları ya siləcəyik, ya da anonimləşdirəcəyik, ya
          da bu mümkün deyilsə (məsələn, şəxsi məlumatlarınız arxivdə
          saxlanıldığı üçün), onda təhlükəsiz şəkildə şəxsi məlumatlarınızı
          saxlayacaq və silmək mümkün olana qədər hər hansı bir əməliyyatdan
          təcrid edəcəyik.
        </Text>{" "}
        <br />
        <Text as="b" fontSize="2xl">
          8. MƏLUMATLARINIZI NECƏ TƏHLÜKƏSİZLİKDƏ SAXLAYIRIQ?
        </Text>{" "}
        <br />
        <Text as="b">
          Xülasə: Biz şəxsi məlumatlarınızı təşkilati və texniki təhlükəsizlik
          tədbirləri sistemi ilə qorumağı hədəfləyirik.
        </Text>{" "}
        <br />
        <Text>
          İşlədiyimiz hər hansı bir şəxsi məlumatın təhlükəsizliyini qorumaq
          üçün hazırlanmış müvafiq texniki və təşkilati təhlükəsizlik tədbirləri
          həyata keçirmişik. Bununla birlikdə, məlumatlarınızı qorumaq üçün
          səylərimizə baxmayaraq, İnternet üzərindən heç bir elektron
          ötürülmənin və ya məlumat saxlama texnologiyasının 100% təhlükəsiz
          olmasına zəmanət verilmir, bu səbəbdən xakerlərin, kiber
          cinayətkarların və ya digər icazəsiz üçüncü şəxslərin
          təhlükəsizliyimizi məğlub etməyəcəyinə və məlumatlarınızı düzgün
          olmayan şəkildə toplamaq, əldə etmək, oğurlamaq və ya dəyişdirmək
          cəhdlərinin olmayacağına dair söz və ya zəmanət verə bilmərik. Şəxsi
          məlumatlarınızı qorumaq üçün əlimizdən gələni edəcəyimizə baxmayaraq,
          şəxsi məlumatların Veb saytımıza və saytımızdan ötürülməsinə siz
          cavabdehsiniz. Veb saytına yalnız etibarlı bir mühitdə daxil
          olmalısınız.
        </Text>
        <br />
        <Text as="b" fontSize="2xl">
          9. GİZLİLİK HÜQUQLARINIZ NƏDİR?
        </Text>
        <br />
        <Text as="b">
          Xülasə: Avropa İqtisadi Bölgəsi kimi bəzi bölgələrdə şəxsi
          məlumatlarınıza daha çox giriş və nəzarət etməyə imkan verən
          hüquqlarınız var. Hesabınızı istənilən vaxt nəzərdən keçirə, dəyişdirə
          və ya ləğv edə bilərsiniz.
        </Text>
        <Text>
          Bəzi bölgələrdə (Avropa İqtisadi Bölgəsi kimi), tətbiq olunan
          məlumatların qorunması qanunlarına əsasən müəyyən hüquqlarınız var.
          Bunlara daxildir: (i) şəxsi məlumatlarınıza giriş və nüsxə tələb
          etmək; (ii) düzəltmə və ya silməyi tələb etmək; (iii) şəxsi
          məlumatlarınızın işlənməsini məhdudlaşdırmaq; və (iv) tətbiq olunarsa,
          məlumatların daşınmasını tələb etmək. Müəyyən hallarda şəxsi
          məlumatlarınızın işlənməsinə etiraz etmək hüququnuz da ola bilər. Belə
          bir tələb üçün, zəhmət olmasa, aşağıda göstərilən əlaqə
          məlumatlarından istifadə edin. Müvafiq məlumatların qorunması
          qanunlarına uyğun olaraq, tələbinizi nəzərdən keçirəcəyik.
          <br /> Şəxsi məlumatlarınızı işləmək üçün razılığınıza güvəniriksə,
          istənilən vaxt razılığınızı geri götürmək hüququnuz var. Ancaq nəzərə
          alın ki, bu, razılıq geri götürüldükdən əvvəl qanuna uyğun
          əməliyyatlara təsir etməyəcək və ya razılıq xaricində hüquqi işləmə
          əsaslarına uyğun olaraq, şəxsi məlumatlarınızın işlənməsinə təsir
          göstərməyəcəkdir. <br />
          Əgər siz Avropa İqtisadi Bölgəsində yaşayırsınızsa və şəxsi
          məlumatlarınızı qanunsuz olaraq emal etdiyimizə inanırsınızsa, öz
          yerli məlumatların qorunması nəzarət orqanına şikayət etmək hüququnuz
          var. Əlaqə məlumatlarını buradan tapa bilərsiniz:
          http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
          <br />
          Isveçrədə yaşayırsınızsa, məlumatların qorunması orqanlarının əlaqə
          məlumatları burada mövcuddur:
          https://www.edoeb.admin.ch/edoeb/en/home.html.
          <br />
          Gizlilik hüquqlarınızla bağlı suallarınız və ya şərhləriniz varsa,
          bizə legal@doqquz.az elektron poçt ünvanından müraciət edə bilərsiniz.
        </Text>
        <Text as="b" fontSize="2xl">
          Hesab Məlumatı
        </Text>
        <Text as="b">
          Əgər, hesabınızdakı məlumatları nəzərdən keçirmək, dəyişdirmək və ya
          hesabınızı ləğv etmək istəyirsinizsə, bunları edə bilərsiniz:
        </Text>
        <Text>
          Hesab parametrlərinizə daxil olun və istifadəçi hesabınızı yeniləyin.{" "}
          <br />
          Verilən əlaqə məlumatlarını istifadə edərək bizə müraciət edin. <br />
          Hesabınıza xitam vermə tələbinizə uyğun olaraq, hesabınızı və
          məlumatlarınızı aktiv verilənlər bazamızdan deaktiv edəcəyik və ya
          siləcəyik. Bununla birlikdə, saxtakarlığın qarşısını almaq,
          problemlərin aradan qaldırılması, hər hansı bir araşdırmaya kömək
          etmək, İstifadə qaydalarımızı tətbiq etmək və / və ya müvafiq qanuni
          tələblərə əməl etmək üçün sənədlərimizdə bəzi məlumatları saxlaya
          bilərik. <br />
          Çərəzlər və bənzərlər texnologiyalar: Əksər veb brauzerlər çərəzləri
          standart olaraq qəbul etməyə uyğunlaşdırılıb. İstəsəniz, ümumiyyətlə,
          brauzerinizdə çərəzləri silmək və çərəzlərdən imtina etmək
          funksiyasını aktivləşdırə bilərsiniz. Çərəzləri silməyi və ya
          çərəzləri rədd etməyi seçsəniz, bu, Veb saytımızın müəyyən
          xüsusiyyətlərinə və ya xidmətlərinə təsir göstərə bilər. Veb
          saytımızda reklamverənlər tərəfindən maraqlara əsaslanan reklamlardan
          imtina etmək üçün http://www.aboutads.info/choices/ saytına daxil
          olun. <br />
          E-poçt marketinqindən imtina: İstənilən vaxt marketinq e-poçt
          siyahımızdan göndərdiyimiz e-poçtlardakı abunəlikdən çıxmaq üçün linkə
          keçid edərək və ya aşağıda göstərilən detallardan istifadə edib
          bizimlə əlaqə saxlayaraq, abunəlikdən çıxa bilərsiniz. Bundan sonra
          siz marketinq e-poçt siyahısından çıxarılacaqsınız - bununla belə,
          hesabınızın idarəsi və istifadəsi üçün lazım olan xidmətlə əlaqəli
          e-poçtlar göndərmək, xidmət istəklərinə cavab vermək və ya digər
          qeyri-marketing məqsədlər üçün sizinlə əlaqə qura bilərik. Başqa
          üsulla imtina etmək üçün bunları edə bilərsiniz: <br />
          Hesab parametrlərinizə daxil olun və seçimlərinizi yeniləyin. <br />
          Verilən əlaqə məlumatlarını istifadə edərək bizimlə əlaqə qurun.
        </Text>
        <Text as="b" fontSize="2xl">
          11. KALİFORNİYA SAKİNLƏRİNƏ MƏXSUS GÜVƏNLİK HÜQUQLARI VARMI?
        </Text>
        <Text as="b">
          Xülasə: Bəli, Kaliforniya sakinisinizsə, şəxsi məlumatlarınıza giriş
          ilə bağlı sizə xüsusi hüquqlar verilir.
        </Text>
        <Text>
          "Shine The Light " qanunu olaraq da bilinən Kaliforniya Mülki Məcəllə
          Bölümü 1798.83, Kaliforniya sakinləri olan istifadəçilərimizdən ildə
          bir dəfə və pulsuz olaraq fərdi məlumat kateqoriyalarına dair
          məlumatları istəməsinə və əldə etməsinə, həmçinin, birbaşa marketinq
          məqsədi ilə əvvəlki təqvim ilində şəxsi məlumatları bölüşdüyümüz bütün
          üçüncü şəxslərin adlarını və ünvanlarını açıqlanmasını istəməsinə
          icazə verir. Əgər, Kaliforniyada yaşayırsınızsa və belə bir tələb
          etmək istəyirsinizsə, xahiş edirik aşağıda göstərilən əlaqə
          məlumatlarını istifadə edərək yazılı şəkildə sorğunuzu bizə göndərin.{" "}
          <br />
          Əgər, 18 yaşdan kiçiksinizsə, Kaliforniyada yaşayırsınızsa və Veb
          saytında qeydiyyatdan keçmiş hesabınız varsa, Veb saytında açıq
          şəkildə yerləşdirdiyiniz istənməyən məlumatların silinməsini tələb
          etmək hüququnuz var. Bu cür məlumatların silinməsini tələb etmək üçün
          aşağıda göstərilən əlaqə məlumatlarını istifadə edərək bizimlə əlaqə
          qurun və hesabınızla əlaqəli e-poçt ünvanını və Kaliforniyada
          yaşadığınızı sübut edən bəyənatı əlavə edin. Verilənlərin Veb saytında
          açıq şəkildə göstərilməməsini təmin edəcəyik, ancaq, məlumatların
          bütün sistemlərimizdən (məsələn, ehtiyat arxivi və s.) tamamilə və ya
          hərtərəfli silinə bilməyəcəyini unutmayın.{" "}
        </Text>
        <Text as="b" fontSize="2xl">
          12. BU BİLDİRİŞ YENİLƏNİRMİ?
        </Text>
        <Text as="b">
          Xülasə: Bəli, müvafiq qanunlara uyğun qalmaq üçün bu bildirişi zəruri
          olduqda yeniləyəcəyik.
        </Text>
        <Text>
          Bu məxfilik bildirişini zaman zaman yeniləyə bilərik. Yenilənmiş
          versiya yenilənmiş "Yenidən işlənmiş " tarixlə göstəriləcək və
          yenilənmiş versiya əlçatan olan kimi qüvvəyə minəcəkdir. Bu məxfilik
          bildirişində əhəmiyyətli dəyişikliklər edildikdə, ya bu dəyişikliklər
          barədə paylaşım etməklə ya da birbaşa bildiriş göndərməklə sizi
          xəbərdar edə bilərik. Məlumatlarınızı necə qoruduğumuz barədə məlumat
          almaq üçün bu məxfilik bildirişini tez-tez nəzərdən keçirməyinizi
          tövsiyə edirik.
        </Text>
        <Text as="b" fontSize="2xl">
          13. BU BİLDİRİŞLƏ BAĞLI BİZİMLƏ NECƏ ƏLAQƏ QURA BİLƏRSİNİZ?
        </Text>
        <Text>
          Bu bildirişlə bağlı suallarınız və ya şərhləriniz varsa, bizə
          legal@doqquz.az
          <br /> elektron poçt ünvanından müraciət edə bilərsiniz.
        </Text>
        <Text as="b" fontSize="2xl">
          14. SİZDƏN TOPLADIĞIMIZ MƏLUMATLARI NECƏ NƏZƏRDƏN KEÇİRƏ, YENİLƏYƏ VƏ
          YA SİLƏ BİLƏRSİNİZ?
        </Text>
        <Text>
          Ölkənizin müvafiq qanunlarına əsasən, sizdən topladığımız şəxsi
          məlumatlara giriş tələb etmək, bu məlumatları dəyişdirmək və ya bəzi
          hallarda silmək hüququnuz ola bilər. Şəxsi məlumatlarınızı nəzərdən
          keçirmək, yeniləmək və ya silmək üçün :https://doqquz.az/profile.
          linkinə keçid etməniz xahiş olunur. Tələbinizə 30 gün ərzində cavab
          verəcəyik.
        </Text>
      </Box>
    </Container>
  );
};

export default Privacy;
