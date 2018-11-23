import React, { Component } from 'react';
import { DocumentPicker, FileSystem } from 'expo';

export default class JsonParser extends Component {
    state = {
        data: null,
    };
    // Initialisation de la méthode pickDocument qui permet de sélectionner un fichier dans le répertoire Download de l'appareil
    _pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({
            type: '*/*',
        });
        // Si sélection valide alors on quitte le dossier en cours pour afficher l'onglet principal de l'app
        if (result.type === 'cancel') {
            console.log('cancel');
            return;
        }
        // Récupération du contenu du fichier qui sera utilisé dans le parser json ensuite. 
        const content = await FileSystem.readAsStringAsync(result.uri);
        
        // Chaque valeur de ligne du fichier sera séparé par un saut de ligne
        let lines = content.split('\n');
        //On initialise notre tableau avec res
        let res = [];
        let i = 1;
        let j = 0;
        while (lines[i]) {
            columns = lines[i].split('\t');
            if (i == 1) {
                //Première itération de la boucle : on récupere le titre des colonnes
                titles = columns;
            } else {
                res[i - 2] = {};
                //Seconde itération de la boucle : pour chaque colonne, on enregistre dans res[i][titre] la valeur associée
                j = 0;
                while (columns[j]) {
                    res[i - 2][titles[j]] = columns[j];
                    j++;
                }
            }
            i++;
        }
        
        // On crée la variable locale dir qui permet d'initialiser le dossier de cache utilisé par Expo et le dossier meteo-etna qui va enregistrer notre tableau de données en .json
        let dir = FileSystem.cacheDirectory + 'meteo-etna';
        // On crée la variable locale filename qui enregistre un fichier en récupérant la première valeur de la colonne CREATEDATE pour créer le nom et on attribue au fichier l'extension en json
        let filename = res[0].CREATEDATE + '.json';
        // Conversion de res qui contient nos colonnes avec leurs valeurs en chaîne JSON
        let json = JSON.stringify(res);
        
        // const dir_info = await Expo.FileSystem.getInfoAsync(dir);
        // if (!Boolean(dir_info.exists)) {
        //   try {
        //     await FileSystem.makeDirectoryAsync(dir, {
        //       intermediates: true
        //     });
        //   } catch(e) {
        //     console.log("could not create directory " + dir);
        //     console.log(e);
        //   }
        // }
        console.log(dir);
        console.log(FileSystem.cacheDirectory);
        
        FileSystem.writeAsStringAsync(dir + filename, json);
        this.state = { 
            data: res,
            filename : filename
        };
    };