<?php

declare(strict_types=1);

namespace MedShifts\ClassifierML;

use Rubix\ML\Classifiers\RandomForest;
use Rubix\ML\Datasets\Labeled;
use Rubix\ML\Datasets\Unlabeled;
use Rubix\ML\Extractors\CSV;
use Rubix\ML\Classifiers\SVC;
use Rubix\ML\Kernels\SVM\Linear;
use Rubix\ML\CrossValidation\Metrics\Accuracy;
use Rubix\ML\Persistable;
use Rubix\ML\Tokenizers\Word;
use Rubix\ML\Transformers\StopWordFilter;
use Rubix\ML\Transformers\TextNormalizer;
use Rubix\ML\Transformers\TfIdfTransformer;
use Rubix\ML\Transformers\Transformer;
use Rubix\ML\Pipeline;
use Rubix\ML\Transformers\WordCountVectorizer;

class ProfessionalTypeClassifier
{
    protected $vectorizer;
    protected $classifier;

    public function __construct()
    {
        $this->vectorizer = new WordCountVectorizer();
        $this->classifier = new SVC(1.0, new Linear());
    }

    public function classify(string $value): string
    {
        $classifier = unserialize(file_get_contents(storage_path('model.job')));
        $vectorizer = unserialize(file_get_contents(storage_path('vectorizer.job')));

        $input = [$value];
        $vectorizer->transform($input);

        return $classifier->predict($input)[0];
    }

    public function train(): void
    {
        $dataset = [
            ['Pielęgniarka Rodzinna w POZ - miejsce pracy: Ożarów Mazowiecki', 'Pielęgniarstwo'],
            ['Ośrodek leczenia uzależnień zatrudni terapeutkę uzależnień','Psychologia'],
            ['Psychoterapeuta dzieci i młodzieży','Psychologia'],
            ['Psycholog dzieci i młodzieży','Psychologia'],
            ['Asystentka stomatologiczna','Stomatologia'],
            ['Pielęgniarka/pielęgniarz, ratownik medyczny','Pielęgniarstwo / Ratownictwo Medyczne'],
            ['Studentka do gabinetu ortodontycznego na Kabatach','Ortodoncja'],
            ['Pielęgniarka / Pielęgniarz','Pielęgniarstwo'],
            ['Stomatolog praca','Stomatologia'],
            ['Praca dla lekarza psychiatry - Warszawa Ursus','Psychiatria'],
            ['Pielęgniarka w Domu Seniora','Pielęgniarstwo'],
            ['Praca w ALAB laboratoria -Biolog/Biotechnolog-Technolog w laboratorium','Diagnostyka'],
            ['Poszukujemy pielęgniarki do pracy w Oddziale Szpital Kolejowy Pruszków','Pielęgniarstwo'],
            ['Asystent/Asystentka stomatologiczna','Stomatologia'],
            ['Asystentka stomatologiczna DENIS CLINIC od PAŹDZIERNIKA 2024','Stomatologia'],
            ['Opiekun medyczny, Opiekunka Środowiskowa - praca od zaraz','Opieka Medyczna'],
            ['Asystentka stomatologiczna Ursynów','Stomatologia'],
            ['Pielęgniarka/Pielęgniarz CMP Wola','Pielęgniarstwo'],
            ['Pielęgniarka Rodzinna w POZ - miejsce pracy: Milanówek','Pielęgniarstwo'],
            ['Pielęgniarka/Pielęgniarz CMP Białołęka','Pielęgniarstwo'],
            ['Asystentka Stomatologiczna 3/4 etatu','Stomatologia'],
            ['Zapraszam do współpracy Psychologa/Psychoterapeutę- Stare Babice','Psychologia'],
            ['Lekarz Stomatolog Warszawa','Stomatologia'],
            ['Centrum Medyczne DP MED Jabłonna - Pielęgniarka','Pielęgniarstwo'],
            ['Dentystę zatrudni Przychodnia z siedzibą w Ząbkach koło Warszawy','Stomatologia'],
            ['Ortodontę zatrudni Przychodnia w Zielonce koło Warszawy','Ortodoncja'],
            ['Ortodontę zatrudni Przychodnia Specjalistyczna w Ząbkach koło Warszawy','Ortodoncja'],
            ['Dentystę zatrudni Przychodnia Specjalistyczna w Zielonce koło Warszawy','Stomatologia'],
            ['Asystentka Stomatologiczna','Stomatologia'],
            ['Lekarz stomatolog poszukiwany - Warszawa','Stomatologia'],
            ['lekarz ortodonta','Ortodoncja'],
            ['Asystentka stomatologiczna - praca dla studentki Klinika w Markach','Stomatologia'],
            ['Położna/Położny CMP Śródmieście','Położnictwo'],
            ['##Asystentka Stomatologiczna ## Warszawa Wola','Stomatologia'],
            ['Klinika Stomatologiczna w Ząbkach zatrudni Lekarzy','Stomatologia'],
            ['Oferta pracy Stomatologia Chirurgia','Chirurgia'],
            ['Optometrysta/Refrakcjonista do salonu optycznego na Woli','Optometria'],
            ['lekarze endokrynolog','Endokrynologia'],
            ['Lekarz dentysta, stomatolog','Stomatologia'],
            ['Asystentka Stomatologiczna Warszawa - Esthedent','Stomatologia'],
            ['Asystentka stomatologiczna Warszawa Ursynów','Stomatologia'],
            ['Asysta Stomatologiczna - Pełen Etat - UoP','Stomatologia'],
            ['studentka dietetyki/żywienia człowieka','Dietetyka'],
            ['Pielęgniarka Rodzinna w POZ - miejsce pracy: Milanówek','Pielęgniarstwo'],
            ['Pielęgniarka Rodzinna w POZ - miejsce pracy: Ożarów Mazowiecki','Pielęgniarstwo'],
            ['Pielęgniarka Anestezjologiczna/ Pielęgniarz Anestezjologiczny','Pielęgniarstwo'],
            ['Higienista/-ka Stomatologiczny/-a LUX MED Stara Iwiczna','Stomatologia'],
            ['Pielęgniarka/Pielęgniarz CMP Wola','Pielęgniarstwo'],
            ['Pielęgniarka/Pielęgniarz (Medycyna Pracy)','Pielęgniarstwo'],
            ['Asystentka stomatologiczna - praca dla studentki Klinika w Markach','Stomatologia'],
            ['##Asystentka Stomatologiczna ## Warszawa Wola','Stomatologia'],
            ['"Asystentkę, higienistkę do przychodni w Siedlcach zatrudnię."','Stomatologia'],
            ['Pielęgniarka/Pielęgniarz CMP Ursynów','Pielęgniarstwo'],
            ['Pielęgniarka/Pielęgniarz- praca w stacji dializ DaVita Siedlce','Pielęgniarstwo'],
            ['Technik RTG - Elektroradiolog - Praca dodatkowa','Radiologia'],
            ['Diagnosta Laboratoryjny','Diagnostyka'],
            ['Pielęgniarka/Pielęgniarz','Pielęgniarstwo'],
            ['Pielęgniarka zabiegowa','Pielęgniarstwo'],
            ['Praca Pielęgniarka','Pielęgniarstwo'],
            ['Pielęgniarz/Pielęgniarka Anestezjologiczny/-a - LUX MED Onkologia','Pielęgniarstwo'],
            ['Higienistka/asystentka stomatologiczna','Stomatologia'],
            ['Asystentka Stomatologiczna Warszawa - Esthedent','Stomatologia'],
            ['Asystentka stomatologiczna','Stomatologia'],
            ['Obsługa Pacjenta i Rejestracji - Stomatologia OptimDent - Marymont','Stomatologia'],
            ['Higienistka/asystentka stomatologiczna','Stomatologia'],
            ['Asystentka Stomatologiczna','Stomatologia'],
            ['Pielęgniarka w Centrum Opieki i Rehabilitacji (Konstancin-Jeziorna)','Pielęgniarstwo'],
            ['Opiekun w Centrum Opieki i Rehabilitacji (Konstancin-Jeziorna)','Opieka Medyczna'],
            ['Higienistka stomatologiczna na zastępstwo / PRUSZKÓW','Stomatologia'],
            ['Dermatolog/ Medycyna estetyczna','Dermatologia'],
            ['Pielęgniarka / Pielęgniarz - Centrum Medyczne Damiana','Pielęgniarstwo'],
            ['Poszukiwana asystentka stomatologiczna','Stomatologia'],
            ['Koordynator opieki w przychodni poz','Opieka Medyczna'],
            ['PIELĘGNIARKA w ZOL/ Hospicjum Stacjonarnym','Pielęgniarstwo'],
            ['Asystentka Stomatologiczna','Stomatologia'],
            ['Lekarz Ginekolog - Warszawa','Ginekologia'],
            ['Asystentka Ortodontyczna - Praca w Centrum','Ortodoncja'],
            ['Technik farmaceutyczny - Apteka Pruszków','Farmacja'],
            ['Położna/Położny w Szpitalu Wojewódzkim','Położnictwo'],
            ['Pielęgniarka Pediatryczna - Warszawa Mokotów','Pielęgniarstwo'],
            ['Fizjoterapeuta/rehabilitant','Fizjoterapia'],
            ['Asystentka medyczna w prywatnej klinice','Medycyna'],
            ['Psycholog dziecięcy','Psychologia'],
            ['Pielęgniarka Neurologiczna','Pielęgniarstwo'],
            ['Chirurg szczękowy - praca w centrum medycznym','Chirurgia'],
            ['Pielęgniarka w klinice dermatologicznej','Pielęgniarstwo'],
            ['Lekarz dentysta - praca w Ząbkach','Stomatologia'],
            ['Dietetyk - Warszawa Śródmieście','Żywienie'],
            ['Położna - oddział położniczy','Położnictwo'],
            ['Pielęgniarz anestezjologiczny - praca na oddziale','Pielęgniarstwo'],
            ['Technik radiologii - praca w szpitalu','Radiologia'],
            ['Farmaceuta - Apteka Całodobowa','Farmacja'],
            ['Terapeuta uzależnień - Ośrodek Terapeutyczny','Psychologia'],
            ['Pielęgniarka operacyjna - Warszawa','Pielęgniarstwo'],
            ['Ortopeda dziecięcy','Ortopedia'],
            ['Asystentka stomatologiczna w prywatnym gabinecie','Stomatologia'],
            ['Lekarz internista - praca w szpitalu','Medycyna'],
            ['Dietetyk kliniczny','Żywienie'],
            ['Pielęgniarka środowiskowa - Ożarów Mazowiecki','Pielęgniarstwo'],
            ['Pielęgniarz w hospicjum','Pielęgniarstwo'],
            ['Asystentka ortodontyczna - praca w klinice stomatologicznej','Ortodoncja'],
            ['Lekarz okulista - Warszawa','Okulistyka'],
            ['Fizjoterapeuta sportowy','Fizjoterapia'],
            ['Psychiatra dziecięcy - praca w poradni','Psychiatria'],
            ['Lekarz kardiolog - praca w centrum kardiologicznym','Kardiologia'],
            ['Technik RTG - praca w przychodni','Radiologia'],
            ['Położna - praca w szpitalu powiatowym','Położnictwo'],
            ['Pielęgniarka w klinice medycyny estetycznej','Pielęgniarstwo'],
            ['Lekarz dermatolog','Dermatologia'],
            ['Pielęgniarka intensywnej terapii','Pielęgniarstwo'],
            ['Farmaceuta - praca w aptece sieciowej','Farmacja'],
            ['Asystentka stomatologiczna - praca dla studentki','Stomatologia'],
            ['Lekarz neurolog','Neurologia'],
            ['Opiekunka medyczna w domu opieki','Opieka Medyczna'],
            ['Położna - praca na oddziale neonatologicznym','Położnictwo'],
            ['Asystentka ortodontyczna - Warszawa','Ortodoncja'],
            ['Pielęgniarka w poradni diabetologicznej','Pielęgniarstwo'],
            ['Lekarz urolog','Urologia'],
            ['Pielęgniarka nefrologiczna - praca w stacji dializ','Pielęgniarstwo'],
            ['Asystentka stomatologiczna w centrum dentystycznym','Stomatologia'],
            ['Psycholog kliniczny','Psychologia'],
            ['Rehabilitant - praca w ośrodku rehabilitacyjnym','Fizjoterapia'],
            ['Pielęgniarka onkologiczna - praca w szpitalu','Pielęgniarstwo'],
            ['Higienistka stomatologiczna - praca na zastępstwo','Stomatologia'],
            ['Lekarz reumatolog','Reumatologia'],
            ['Technik farmacji - praca w aptece szpitalnej','Farmacja'],
            ['Psychoterapeuta młodzieży','Psychologia'],
            ['Pielęgniarka w zakładzie opiekuńczym','Pielęgniarstwo'],
            ['Dietetyk sportowy - praca w klinice','Żywienie'],
            ['Asystentka medyczna - praca w centrum medycznym','Medycyna'],
            ['Pielęgniarka operacyjna - praca w klinice chirurgii plastycznej','Pielęgniarstwo'],
            ['Pielęgniarz ratunkowy - praca w SOR','Pielęgniarstwo / Ratownictwo Medyczne'],
            ['Lekarz psychiatra - praca w szpitalu psychiatrycznym','Psychiatria'],
            ['Diagnosta laboratoryjny - praca w laboratorium medycznym','Diagnostyka'],
            ['Położna - praca na oddziale ginekologiczno-położniczym','Położnictwo'],
            ['Asystentka stomatologiczna - praca na pełen etat','Stomatologia'],
            ['Lekarz endokrynolog - praca w poradni','Endokrynologia'],
            ['Pielęgniarka w przychodni POZ','Pielęgniarstwo'],
            ['Dietetyk kliniczny - praca w szpitalu','Żywienie'],
            ['Pielęgniarka kardiologiczna - praca na oddziale kardiologii','Pielęgniarstwo'],
            ['Asystentka ortodontyczna - pełen etat','Ortodoncja'],
            ['Psycholog dziecięcy - praca w poradni psychologicznej','Psychologia'],
            ['Lekarz pulmonolog - praca w centrum medycznym','Pulmonologia'],
            ['Fizjoterapeuta - praca w przychodni rehabilitacyjnej','Fizjoterapia'],
            ['Lekarz medycyny pracy - praca w klinice','Medycyna Pracy'],
            ['Opiekun medyczny - praca w domu opieki','Opieka Medyczna'],
            ['Technik radiologii - praca na pełen etat','Radiologia'],
            ['Asystentka stomatologiczna w prywatnym gabinecie','Stomatologia'],
            ['Lekarz pediatra - praca w szpitalu dziecięcym','Pediatria'],
            ['Pielęgniarka onkologiczna - praca na oddziale','Pielęgniarstwo'],
            ['Położna - praca na oddziale porodowym','Położnictwo'],
            ['Psycholog szkolny','Psychologia'],
            ['Lekarz okulista - praca w klinice okulistycznej','Okulistyka'],
            ['Asystentka stomatologiczna - praca dorywcza','Stomatologia'],
            ['Pielęgniarka dziecięca - praca na oddziale','Pielęgniarstwo'],
            ['Psychiatra dorosłych - praca w szpitalu','Psychiatria'],
            ['Fizjoterapeuta dziecięcy - praca w ośrodku rehabilitacyjnym','Fizjoterapia'],
            ['Lekarz kardiolog - praca w szpitalu klinicznym','Kardiologia'],
            ['Dietetyk - praca w poradni dietetycznej','Żywienie'],
            ['Asystentka stomatologiczna - praca w małej przychodni','Stomatologia'],
            ['Pielęgniarka internistyczna','Pielęgniarstwo'],
            ['Psycholog dziecięcy - praca w centrum pomocy psychologicznej','Psychologia'],
            ['Technik RTG - praca na zmiany','Radiologia'],
            ['Opiekun medyczny - praca w szpitalu','Opieka Medyczna'],
            ['Lekarz ginekolog - praca na pełen etat','Ginekologia'],
            ['Pielęgniarka anestezjologiczna - praca na bloku operacyjnym','Pielęgniarstwo'],
        ];

        $dataset = Labeled::fromIterator($dataset);

        [$training, $testing] = $dataset->randomize()->split(0.8);

        $pipeline = new Pipeline(
            [
                new TextNormalizer(),                  // Normalizowanie tekstu (np. lowercase)
                new StopWordFilter(),                  // Usunięcie stopwords
                new WordCountVectorizer(tokenizer: new Word(1, 2)), // Wektor z n-gramami (1-2)
                new TfIdfTransformer(),                // TF-IDF do ważenia słów
            ],
            new RandomForest()
        );

        $pipeline->train($training);

        dd($pipeline->predict(new Unlabeled(['Chirurg poszukiwany!!!', 'Poszukiwana pielęgniarka na oddziale ratunkowym'])));
    }
}
