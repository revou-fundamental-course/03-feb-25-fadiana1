document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("convert-btn").addEventListener("click", convertTemperature);
    document.getElementById("reset-btn").addEventListener("click", resetFields);
    document.getElementById("reverse-btn").addEventListener("click", reverseConversion);
});

function convertTemperature() {
    let celsius = document.getElementById("main-input").value;
    document.getElementById("cara-konversi").innerText = ""; // Reset cara konversi setiap kali konversi dilakukan
    
    if (celsius !== "") {
        let fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("main-result").value = fahrenheit.toFixed(2);
        
        // Ubah cara konversi menjadi innerText, bukan value
        document.getElementById("cara-konversi").innerText = 
            `${celsius}°C × (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    }
}

function resetFields() {
    document.getElementById("main-input").value = "";
    document.getElementById("main-result").value = "";
    document.getElementById("cara-konversi").innerText = "";
}

function reverseConversion() {
    let fahrenheit = document.getElementById("main-result").value;
    document.getElementById("cara-konversi").innerText = ""; // Reset cara konversi setiap kali reverse dilakukan
    
    if (fahrenheit !== "") {
        let celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById("main-input").value = celsius.toFixed(2);

        // Menampilkan cara konversi di dalam innerText, bukan value
        document.getElementById("cara-konversi").innerText = 
            `${fahrenheit}°F − 32 × (5/9) = ${celsius.toFixed(2)}°C`;
    }
}