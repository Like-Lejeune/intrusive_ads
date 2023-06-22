var bouton = document.getElementById('monBouton');
var adressesRedirection = ['https://photoquix.net/inscription', 'https://github.com/Like-Lejeune/', 'https://www.youtube.com/channel/UCibWdmBhKptD3qRPuhrqv3g'];
var compteur = 0;

bouton.addEventListener('click', function() {
    if (compteur < adressesRedirection.length) {
        window.open(adressesRedirection[compteur], '_blank');
        compteur++;
    } else if (compteur >= 3) {
        compteur++;
        // alert("you have suffered a redirection 03 times")
        var downloadLink = document.createElement('a');
        downloadLink.href = ' C:/Users/user/OneDrive/Desktop/intrusive_ads_button/test.pdf'; // Remplacez l'URL par le lien de téléchargement souhaité
        downloadLink.download = 'test.pdf'; // Remplacez "nom-du-fichier" par le nom souhaité pour le fichier téléchargé
        downloadLink.click();

    }
});