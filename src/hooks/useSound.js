import { useRef, useEffect } from 'react';

const useSound = (soundUrl, dependencies) => {
  const audioRef = useRef(null);

  // au chargement initial du composant
  // on va créer un objet audio et le mettre dans notre ref
  useEffect(() => {
    // on crée un objet audio et on le met dans la ref
    audioRef.current = new Audio(soundUrl);
  }, []);

  useEffect(() => {
    // messages a changé... jouons un son !
    // on remet le curseur de lecture au début
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  }, dependencies);
};

export default useSound;
