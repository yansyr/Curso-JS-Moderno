const reproductor = {
    cancion: '',
    reproducir: (id) => console.log(`Reproduciendo cancion con el id ${id}`),
    pausa: () => console.log('Pausando...'),
    borrar: (id) => console.log(`Borrando cancion... ${id}`),
    set nuevaCancion(cancion) {
        this.cancion = cancion
        console.log(`Añadiendo ${cancion}`)
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }
}


reproductor.reproducir(30)

reproductor.nuevaCancion = 'Enter SAndman'

reproductor.obtenerCancion