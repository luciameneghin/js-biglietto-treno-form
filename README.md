Biglietto treno DOM
===

## Consegna
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

<!-- Cosa fare:
- input1 per inserire il numero di km da percorrere
- input2 per inserire l'età
- bottone da premere che mostra il calcolo
i risultati vanno in console -->

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

<!-- Cosa fare:
- creare una grafica spoglia del biglietto in cui andrò ad inserire i dati di tipologia di biglietto(minore, standard, over 65), km da percorrere, codice treno, ora di partenza e prezzo totale
- al click del bottone i dati vengono inseriti nel biglietto fittizio al di sotto, il biglietto sarà d-none e una volta schiacciato il bottone d-block. 
- nel momento in cui premo il bottone i dati inseriti sopra negli input si cancellano -->