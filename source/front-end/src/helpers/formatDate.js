export const formatDate =(date) => {
    const flightDate = new Date(date);

    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit' };

    const formattedDate = flightDate.toLocaleDateString('en-US', optionsDate);
    const formattedTime = flightDate.toLocaleTimeString('en-US', optionsTime);
    const formattedFlight = `${formattedDate} at ${formattedTime}`;
    
    return formattedFlight
} 
