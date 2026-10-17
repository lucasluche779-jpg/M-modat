const welcomeMessages=[['☀️','Une nouvelle page','Choisis une seule chose importante. Le reste suivra.'],['🌿','Doucement, mais sûrement','Un petit progrès vaut toujours mieux que de ne rien commencer.'],['⚡','Aujourd’hui est à toi','Lance-toi pendant deux minutes : souvent, c’est tout ce qu’il faut.'],['🌤️','Fais de la place au bon','Avance sans te comparer. Ton rythme est le bon.'],['🌱','Un pas après l’autre','Les grandes choses commencent par une petite action.'],['🧭','Garde ton cap','Tu n’as pas besoin d’être parfait·e, seulement de continuer.'],['✨','Fais briller ta journée','Repère ce qui te ferait être fier·e ce soir.']];
const welcomeDate=new Date(),welcome=welcomeMessages[(welcomeDate.getFullYear()*372+welcomeDate.getMonth()*31+welcomeDate.getDate())%welcomeMessages.length];
document.querySelector('#welcomeSymbol').textContent=welcome[0];
document.querySelector('#welcomeTitle').textContent=welcome[1];
document.querySelector('#welcomeMessage').textContent=welcome[2];
document.querySelector('#enterApp').addEventListener('click',()=>document.querySelector('#welcomeScreen').classList.add('hidden'));
