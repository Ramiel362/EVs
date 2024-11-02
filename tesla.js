document.addEventListener('DOMContentLoaded', () => {
    const worldMap = document.getElementById('world-map');
    const mapContainer = document.querySelector('.map-container');
    const tooltip = document.getElementById('tooltip');

    const continentData = {
        NorthAmerica: {
            name: "North America",
            evCount: 3000000,
            chargingStations: 135000,
            biggestContributor: "USA",
            countries: [
                { name: "USA", evCount: 2800000, recDate: 2023 },
                { name: "Canada", evCount: 60000 },
                { name: "Mexico", evCount: 25000 }
            ]
        },
        SouthAmerica: {
            name: "South America",
            evCount: 50000,
            chargingStations: 5000,
            biggestContributor: "Brazil",
            countries: [
                { name: "Brazil", evCount: 30000 },
                { name: "Chile", evCount: 10000 },
                { name: "Argentina", evCount: 7000 }
            ]
        },
        Europe: {
            name: "Europe",
            evCount: 8400000,
            chargingStations: 450000,
            biggestContributor: "Germany",
            countries: [
                { name: "Germany", evCount: 1800000 },
                { name: "France", evCount: 1100000 },
                { name: "UK", evCount: 1000000 }
            ]
        },
        Africa: {
            name: "Africa",
            evCount: 10000,
            chargingStations: 1000,
            biggestContributor: "South Africa",
            countries: [
                { name: "South Africa", evCount: 5000 },
                { name: "Egypt", evCount: 2000 },
                { name: "Kenya", evCount: 1000 }
            ]
        },
        Asia: {
            name: "Asia",
            evCount: 11000000,
            chargingStations: 3000000,
            biggestContributor: "China",
            countries: [
                { name: "China", evCount: 9500000 },
                { name: "India", evCount: 1700000 },
                { name: "Japan", evCount:  150000}
            ]
        },
        Oceania: {
            name: "Oceania",
            evCount: 80000,
            chargingStations: 3000,
            biggestContributor: "Australia",
            countries: [
                { name: "Australia", evCount: 65000 },
                { name: "New Zealand", evCount: 10000 }
            ]
        }
    };

    if (worldMap && mapContainer && tooltip) {
        worldMap.addEventListener('mousemove', (event) => {
            const x = event.pageX - mapContainer.offsetLeft;
            const y = event.pageY - mapContainer.offsetTop;

            tooltip.style.left = x + 20 + 'px';
            tooltip.style.top = y + 20 + 'px';

            // North America hover region
            if (x > 300 && x < 675 && y > 34 && y < 420) {
                const continent = continentData.NorthAmerica;
                tooltip.innerHTML = `
                    <strong>Continent:</strong> ${continent.name}<br>
                    <strong>EVs:</strong> ${continent.evCount.toLocaleString()}<br>
                    <strong>Charging Stations:</strong> ${continent.chargingStations.toLocaleString()}<br>
                    <strong>Biggest Contributor:</strong> ${continent.biggestContributor}<br>
                    <strong>Top 3 Contributors:</strong><br>
                    ${continent.countries.map(country => `${country.name}: ${country.evCount.toLocaleString()} EVs`).join('<br>')}
                `;
                tooltip.style.display = 'block';
            }
            // South America hover region
            else if (x > 490 && x < 635 && y > 423 && y < 630) {
                const continent = continentData.SouthAmerica;
                tooltip.innerHTML = `
                    <strong>Continent:</strong> ${continent.name}<br>
                    <strong>EVs:</strong> ${continent.evCount.toLocaleString()}<br>
                    <strong>Charging Stations:</strong> ${continent.chargingStations.toLocaleString()}<br>
                    <strong>Biggest Contributor:</strong> ${continent.biggestContributor}<br>
                    <strong>Countries:</strong><br>
                    ${continent.countries.map(country => `${country.name}: ${country.evCount.toLocaleString()} EVs`).join('<br>')}
                `;
                tooltip.style.display = 'block';
            }
            // Europe hover region
            else if (x > 683 && x < 867 && y > 170 && y < 345) {
                const continent = continentData.Europe;
                tooltip.innerHTML = `
                    <strong>Continent:</strong> ${continent.name}<br>
                    <strong>EVs:</strong> ${continent.evCount.toLocaleString()}<br>
                    <strong>Charging Stations:</strong> ${continent.chargingStations.toLocaleString()}<br>
                    <strong>Biggest Contributor:</strong> ${continent.biggestContributor}<br>
                    <strong>Countries:</strong><br>
                    ${continent.countries.map(country => `${country.name}: ${country.evCount.toLocaleString()} EVs`).join('<br>')}
                `;
                tooltip.style.display = 'block';
            }
            // Africa hover region
            else if (x > 661 && x < 852 && y > 356 && y < 554) {
                const continent = continentData.Africa;
                tooltip.innerHTML = `
                    <strong>Continent:</strong> ${continent.name}<br>
                    <strong>EVs:</strong> ${continent.evCount.toLocaleString()}<br>
                    <strong>Charging Stations:</strong> ${continent.chargingStations.toLocaleString()}<br>
                    <strong>Biggest Contributor:</strong> ${continent.biggestContributor}<br>
                    <strong>Countries:</strong><br>
                    ${continent.countries.map(country => `${country.name}: ${country.evCount.toLocaleString()} EVs`).join('<br>')}
                `;
                tooltip.style.display = 'block';
            }
            // Asia hover region
            else if (x > 868 && x < 1200 && y > 81 && y < 440) {
                const continent = continentData.Asia;
                tooltip.innerHTML = `
                    <strong>Continent:</strong> ${continent.name}<br>
                    <strong>EVs:</strong> ${continent.evCount.toLocaleString()}<br>
                    <strong>Charging Stations:</strong> ${continent.chargingStations.toLocaleString()}<br>
                    <strong>Biggest Contributor:</strong> ${continent.biggestContributor}<br>
                    <strong>Countries:</strong><br>
                    ${continent.countries.map(country => `${country.name}: ${country.evCount.toLocaleString()} EVs`).join('<br>')}
                `;
                tooltip.style.display = 'block';
            }
            // Oceania hover region
            else if (x > 992 && x < 1184 && y > 474 && y < 594) {
                const continent = continentData.Oceania;
                tooltip.innerHTML = `
                    <strong>Continent:</strong> ${continent.name}<br>
                    <strong>EVs:</strong> ${continent.evCount.toLocaleString()}<br>
                    <strong>Charging Stations:</strong> ${continent.chargingStations.toLocaleString()}<br>
                    <strong>Biggest Contributor:</strong> ${continent.biggestContributor}<br>
                    <strong>Countries:</strong><br>
                    ${continent.countries.map(country => `${country.name}: ${country.evCount.toLocaleString()} EVs`).join('<br>')}
                `;
                tooltip.style.display = 'block';
            }
            // If not hovering over a continent region, hide the tooltip
            else {
                tooltip.style.display = 'none';
            }
        });
    } else {
        console.error("Elements not found in DOM.");
    }
});
// JavaScript to enlarge image on click
function enlargeImage(imgElement) {
    // Create overlay and enlarged image elements
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const enlargedImg = document.createElement('img');
    enlargedImg.src = imgElement.src;
    enlargedImg.classList.add('enlarged-img');

    // Append elements and add close event on overlay
    overlay.appendChild(enlargedImg);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => overlay.remove());

    // Close with "Escape" key
    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape") overlay.remove();
    });
}

