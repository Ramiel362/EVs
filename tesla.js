document.addEventListener('DOMContentLoaded', () => {
    const worldMap = document.getElementById('world-map');
    const mapContainer = document.querySelector('.map-container');
    const tooltip = document.getElementById('tooltip');

    const continentData = {
        NorthAmerica: {
            name: "North America",
            evCount: 3000000,
            chargingStations: 500000,
            biggestContributor: "USA",
            countries: [
                { name: "USA", evCount: 3300000, recDate: 2024 },
                { name: "Canada", evCount: 700000 },
                { name: "Mexico", evCount: 300000 }
            ]
        },
        SouthAmerica: {
            name: "South America",
            evCount: 500000,
            chargingStations: 80000,
            biggestContributor: "Brazil",
            countries: [
                { name: "Brazil", evCount: 400000 },
                { name: "Argentina", evCount: 70000 },
                { name: "Chile", evCount: 30000 }
            ]
        },
        Europe: {
            name: "Europe",
            evCount: 7000000,
            chargingStations: 1000000,
            biggestContributor: "Germany",
            countries: [
                { name: "Germany", evCount: 2500000 },
                { name: "France", evCount: 2000000 },
                { name: "UK", evCount: 1500000 }
            ]
        },
        Africa: {
            name: "Africa",
            evCount: 200000,
            chargingStations: 10000,
            biggestContributor: "South Africa",
            countries: [
                { name: "South Africa", evCount: 100000 },
                { name: "Nigeria", evCount: 50000 },
                { name: "Kenya", evCount: 30000 }
            ]
        },
        Asia: {
            name: "Asia",
            evCount: 12000000,
            chargingStations: 3000000,
            biggestContributor: "China",
            countries: [
                { name: "China", evCount: 8000000 },
                { name: "Japan", evCount: 2500000 },
                { name: "India", evCount: 1000000 }
            ]
        },
        Oceania: {
            name: "Oceania",
            evCount: 400000,
            chargingStations: 50000,
            biggestContributor: "Australia",
            countries: [
                { name: "Australia", evCount: 350000 },
                { name: "New Zealand", evCount: 50000 }
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
            if (x > 100 && x < 300 && y > 100 && y < 200) {
                const continent = continentData.NorthAmerica;
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
            // South America hover region
            else if (x > 200 && x < 400 && y > 300 && y < 500) {
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
            else if (x > 500 && x < 700 && y > 100 && y < 200) {
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
            else if (x > 450 && x < 600 && y > 300 && y < 400) {
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
            else if (x > 700 && x < 900 && y > 150 && y < 300) {
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
            else if (x > 900 && x < 1100 && y > 500 && y < 600) {
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
