class Fetch{
    async getCurrent(input) {
    const myKey ="cfa83cec8b3ecd384f55282db7850f4f";

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=metric`
    );

    const data = await response.json();

    console.log(data);

    return data;
    }
}