// Objet permettant d'interagir avec des serveurs. On peut récupérer des données à partir d'une URL sans avoir à rafraîchir complètement la page. Cela permet à une page web d'etre mise à jour sans pertuber les actions de l'utilisateur
let xhttp = new XMLHttpRequest();

// Un 'EventHandler' qui réagit aux changements de readyState. Le callback est appelé dans le contexte du thread de rendu. La prompriété "onreadystatechange" contient le gestionnaired'évènement appelé lorsque l'évènement "readystatechange" est déclenché, soit chaque fois que la propriété "readyState" de "XMLHttpRequest" est modifiée.
xhttp.onreadystatechange = () => {

    // L'instruction "try...catch" regroupe des instructions à exécuter et définit une réponse si l'une de ces instructions provoque une exception.
    try{ // Génère une exeption à l'erreur :
        // XMLHttpRequest().readyState = Propriétée qui renvoie l'état dans lequel se trouve un client XMLHttpRequest
        // XMLHttpRequest().DONE = indique que l'opération est terminée
         // si XMLHttpRequest().readyState est = à XMLHttpRequest :
        if(xhttp.readyState === xhttp.DONE) {
            // Crée une constante avec une méthode JSON.parse() qui analyse une chaîne de caractèresJSON et construit la valeur JS ou l'objet décrit parcette chaîne. On peut éventuellement utiliser cette fonction avec un paramètre de modification permettant de traiter l'objet avant qu'il soit renvoyé
            // XMLHttpRequest().responseText = a 'DOMString' qui contient soit les données textuelles reçues à l'aide du 'XMLHttpRequest' ou 'null' si la demande a échoué ou ' "" ' si la demande n'a pas encore été envoyée en appelant 'send()'. Lors du traitement d'une requête asynchrone, la valeur de 'responseText' reçoit toujours le contenu actuel du serveur, même s'il est incomplet car les données n'ontpas encore été complètement reçues. Vous savez que tout le contenu a été reçu lorsque la veleur de readyState deviens XMLHttpRequest.DONE
            const data = JSON.parse(xhttp.responseText);
            document.getElementById(`author`).innerHTML= `${data.author}`;
            document.getElementById(`img`).src= `${data.photo}`;
            document.getElementById('quote').innerHTML= `${data.quote}`;
            // document.getElementById('photo').innerHTML=`${data.photo}`;
            console.log(data);
        }
         // Sinon :
        // Catch():
        // Capture une erreur
    } catch (e) {

        console.log(e);
    }
};
// Ouvrre l'url avec la methode 'GET de manière asynchrone
xhttp.open('GET','https://thatsthespir.it/api', true);
// Envoie l'url
xhttp.send();