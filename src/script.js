// Functie om de huidige tijd te krijgen en weer te geven
function updateTime() {
    // Nieuwe Date object maken - dit geeft ons de huidige datum/tijd
    const now = new Date();
    
    // Uren, minuten en seconden uit de datum halen
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Checken of we 12u formaat moeten gebruiken
    const is12HourFormat = document.getElementById('timeFormat').checked;
    const ampmElement = document.getElementById('ampm');
    
    let displayHours = hours;
    let ampm = '';
    
    if (is12HourFormat) {
        // 12u formaat: AM/PM bepalen
        ampm = hours >= 12 ? 'PM' : 'AM';
        
        // Uren omzetten naar 12u formaat
        displayHours = hours % 12;
        if (displayHours === 0) {
            displayHours = 12; // 0 uur wordt 12 AM/PM
        }
        
        // AM/PM tonen met BEM modifier class
        ampmElement.innerText = ampm;
        ampmElement.classList.add('clock__ampm--visible');
    } else {
        // 24u formaat: AM/PM verbergen door BEM modifier class te verwijderen
        ampmElement.classList.remove('clock__ampm--visible');
    }
    
    // Getallen formatteren zodat ze altijd 2 cijfers hebben (bijv. 09 ipv 9)
    const formattedHours = displayHours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    
    // De tijd als string samenstellen
    const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    
    // Het element met id "time" vinden en de tekst aanpassen
    document.getElementById('time').innerText = timeString;
}

// Event listener toevoegen voor de toggle switch
document.getElementById('timeFormat').addEventListener('change', function() {
    updateTime(); // Direct updaten wanneer de switch wordt gewijzigd
});

// De klok voor de eerste keer updaten wanneer de pagina laadt
updateTime();

// setInterval gebruiken om de updateTime functie elke 1000ms (1 seconde) uit te voeren
setInterval(updateTime, 1000);
