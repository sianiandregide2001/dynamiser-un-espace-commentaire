document.getElementById('comment-form').addEventListener ('submit', function(event) {
    event.preventDefault();     // empêcher le formulaire de se soumettre
    var error=''; 
   
   // récupérer les valeurs des champs

   var firstName = document.getElementById('first-name').value;
   var lastName = document.getElementById('last-name').value;
   var message = document.getElementById('message').value;
   
   if (!firstName || !lastName || !message) {
    // Si un champ est vide, définissez le message d'erreur
     error= "tous les champs doivent être remplis";
   }
   if(error){
    document.getElementById("error-message").style.display = "block"; // Afficher le message d'erreur
    return false
   } else {
     // Masquer le message d'erreur s'il était affiché
     document.getElementById("error-message").style.display = "none";
    
   }
    // Créer un nouvel élément div pour le nouveau commentaire
    var nouveauCommentaire = document.createElement('div');
     nouveauCommentaire.className = 'flex space-x-4 text-sm text-gray-500';

     var contenuCommentaire = `
       <div class="flex-1 py-10 border-t border-gray-200">
         <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
         <div class="prose prose-sm mt-4 max-w-none text-gray-500">
           <p>${message}</p>
         </div>
       </div>
       `;

     nouveauCommentaire.innerHTML = contenuCommentaire;

     // Ajouter le nouvel élément à la liste des commentaires
     var listeCommentaires = document.getElementById('comment-list');
     listeCommentaires.appendChild(nouveauCommentaire);

     // Effacer les champs du formulaire après l'ajout
     document.getElementById('first-name').value = '';
     document.getElementById('last-name').value = '';
     document.getElementById('message').value = '';
     
  
   });