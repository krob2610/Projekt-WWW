# Notes
Głównym celem aplikacji jest tworzenie notatek w odpowiednich kategoriach stworzonych przez admina.
W zależności od uprawnień, możliwa jest modyfikacja oraz usuwanie notek czy też kategorii.

##Zrealizowane Cele
* Rejestracja oraz logowanie użytkowników przy użyciu Paszportu
* Widoki użytkowników(rejestracja, logowanie, profil użytkownika)
* Przydzielenie rol użytkownikom
* Specjalna rejestracja administratora przy użyciu specjalnie ustawionego hasła ("secret1234)
* Tworzenie, modyfikacja, usuwanie notatek
* Widoki notatek(wszystkie notatki, wybrana notatka, tworzenie nowej notatki, modyfikacja istniejącej)
* Automatyczne przydzielenie użytkownika który stworzył notatkę jako autora
* Tworzenie, usuwanie Kategorii
* Widoki kategorii(wszystkie kategorie, wybrana kategoria)
* Podczas tworzenia notatki, musi istnieć kategoria do której będzie przynależeć
* Podczas usunięcia kategorii wszystkie notatki jej podlegające również zostają usunięte

### Uprawienia
Użytkowników aplikacji można podzielić na 3 typy z odpowiadającymi im pozwoleniami.
* niezalogowany:
  * przeglądanie notatek
* zalogowany:
  * przeglądanie notatek
  * tworzenie notatek (automatycznie staje się autorem notatki)
  * modyfikacja notatek jeśli jest ich autorem
* Admin:
  * przeglądanie notatek
  * tworzenie notatek (automatycznie staje się autorem notatki)
  * modyfikacja wszystkich notatek
  * usuwanie notatek
  * Tworzenie kategorii (upload pliku)
  * Usuwanie Kategorii (skutkuje automatycznym usunięciem wszystkich notatek jej podlegających)

### Foldery:
* config - zawiera ustawienia związane z bazą danych oraz paszportem
* models - zawiera modele kolekcji
* routes - zawiera routy związane z kategoriami, użytkownikami oraz notatkami
* views - zawiera widoki (format ejs) do kategorii, notatek oraz użytkowników


### Technologie:
* Node
* ExpressJS
* MongoDB

### Zależności:
* bcrypt-nodejs
* express
* express-session
* mongoose
* nodemon
* passport
* passport-local
* multer
* connect-flash

