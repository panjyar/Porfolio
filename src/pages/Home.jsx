import {Suspense, useState , useEffect , useRef} from 'react';
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Plane from '../models/Plane'
import Bird from '../models/Bird'
import HomeInfo from '../components/HomeInfo'
import sakura from '../assets/bg-music.mp3'
import { soundoff, soundon } from '../assets/icons';
import SocialMedia from '../components/SocialMedia';

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.009;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState  (false);
  const [currentStage , setCurrentStage] = useState(1)
  const [isPlayingMusic , setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if(isPlayingMusic){
      audioRef.current.play();
    }
  }, [isPlayingMusic])

  const adjustIslandForScreenSize = () => {
  let screenScale = null;
  let screenPosition = [0, -6.5, -43];
  let rotation = [0.1, 4.7,0];

  if(window.innerWidth < 786) {
    screenScale = [0.9, 0.9, 0.9];
  }
  else {
    screenScale = [1, 1, 1];
  }
  return [screenScale, screenPosition, rotation];
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;
  
    if(window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5,0]
    }
    else {
      screenScale = [3,3,3];
      screenPosition=[0,-4,-4]
    }
    return [screenScale, screenPosition];
    }
 
const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
const [planeScale , planePosition]= adjustPlaneForScreenSize();


  return (
    <section className="w-full h-screen relative">

     <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
     </div> 
      <Canvas 
      //chaging cursor from pointer to grabing
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near: 0.1, far:1000}}
        >
          <Suspense fallback={<Loader/>}>
            <directionalLight position={[1,1,1]} intensity={2}/>
            <ambientLight intensity={0.5}/>
            <hemisphereLight  skyColor="#b1e1ff" groundColor={"#000000"}/>
            <Bird />
            <Sky
              isRotating={isRotating}
            />
            <Island
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />
            <Plane 
              isRotating={isRotating}
              planeScale={planeScale}
              planePosition={planePosition}
              rotation={[0,20,0]}
            />
          </Suspense>
      </Canvas>

      <SocialMedia/>
      {/* Floating Instruction */}
<div className="absolute top-8 w-full flex justify-center z-20 pointer-events-none">
  <p className="text-slate-300 text-sm md:text-base animate-fade-out transition-opacity duration-300 text-center">
    Click and drag to explore the island. Use the arrows to fly with the bird.
  </p>
</div>

      <div className="absolute bottom-2 left-2">
        <img 
        src= {isPlayingMusic ? soundoff : soundon}
        alt="Sound" 
        className="w-10 h-10 cursor-pointer object-contain"
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}
export default Home
