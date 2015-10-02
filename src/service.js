export class Service {

    _data = [];

    get data(){
        return _data;
    }
    set data(value){
        _data = value;
    }

    getData(url) {

        var xhr = new XMLHttpRequest();

        xhr.responseType = 'json';

        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                this.data = JSON.parse(xhr.responseText);
            }
        }

        xhr.onerror = function(e) {
            throw xhr.error;
        };

        xhr.open('GET', url);
        xhr.send();

    }
}

module.exports = Service;