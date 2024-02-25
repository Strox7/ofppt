import CircularProgress from "@mui/joy/CircularProgress";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/joy";
import "./homePage.css";
import BadgeAvatars from "../header/BadgeAvatars";

function TopPerforming() {
  const listes = [
    {
      img: <Avatar />,
      img2: "/goldMedal.png",
      id: "2004111200318",
      fullname: "idbakasse reda",
      performance: (
        <CircularProgress determinate value={90}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>90%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      img2: "/selverMedal.png",
      id: "2005112100158",
      fullname: "tali soukaina",
      performance: (
        <CircularProgress determinate value={89}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>89%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <BadgeAvatars />,
      img2: "/bronzeMedal.png",
      id: "2004090100228",
      fullname: "Bouhanout Mostafa",
      performance: (
        <CircularProgress determinate value={87}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>87%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2004090300254",
      fullname: "Afarid Badr Eddine",
      performance: (
        <CircularProgress determinate value={86}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>86%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2005030200113",
      fullname: "Ahnid Said",
      performance: (
        <CircularProgress determinate value={80}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>80%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2003020800095",
      fullname: "Aouyna Yassine",
      performance: (
        <CircularProgress determinate value={77}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>77%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2006012500107",
      fullname: "Atrassi Mohamed",
      performance: (
        <CircularProgress determinate value={76}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>76%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2005072800191",
      fullname: "Azanzoune Aicha",
      performance: (
        <CircularProgress determinate value={71}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>71%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2005092300198",
      fullname: "Baba Ali abdelmoughit",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2006022300093",
      fullname: "blouz bakr",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>65%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2004100100204",
      fullname: "boussouf ayoub",
      performance: (
        <CircularProgress determinate value={64}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>64%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2005120400014",
      fullname: "chirah souhail",
      performance: (
        <CircularProgress determinate value={63}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>63%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2003031500470",
      fullname: "daaji mohamed",
      performance: (
        <CircularProgress determinate value={62}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>62%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2002051000416",
      fullname: "el ouarraq achraf",
      performance: (
        <CircularProgress determinate value={61}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>61%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2006020800089",
      fullname: "el marighyghy hiba",
      performance: (
        <CircularProgress determinate value={60}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>60%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2005110900117",
      fullname: "faid rayane",
      performance: (
        <CircularProgress determinate value={57}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>57%</Typography>
        </CircularProgress>
      ),
    },

    {
      img: <Avatar />,
      id: "2005050500138",
      fullname: "kahir yassine",
      performance: (
        <CircularProgress determinate value={55}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>55%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2001082000248",
      fullname: "kitra oumaima",
      performance: (
        <CircularProgress determinate value={54}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>54%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2001010200673",
      fullname: "laazri youssef",
      performance: (
        <CircularProgress determinate value={53}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>53%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2005030700165",
      fullname: "maniyani marouane",
      performance: (
        <CircularProgress determinate value={52}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>52%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2005072800190",
      fullname: "nait hamza",
      performance: (
        <CircularProgress determinate value={50}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>50%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2004060700137",
      fullname: "rahali othmane",
      performance: (
        <CircularProgress determinate value={45}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>45%</Typography>
        </CircularProgress>
      ),
    },

    {
      img: <Avatar />,
      id: "2005012500359",
      fullname: "waaziz ilyass",
      performance: (
        <CircularProgress determinate value={42}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>42%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2004080700114",
      fullname: "zaime yassine",
      performance: (
        <CircularProgress determinate value={40}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>40%</Typography>
        </CircularProgress>
      ),
    },
  ];

  return (
    <div className="topPerfo">
      {listes.map((list) => (
        <div className="voxe" key={list.id}>
          <div className="Contents">
            {list.img}
            {list.fullname}
          </div>
          <span>{list.performance}</span>
          {/* <img className="medal" src={list.img2} alt="medal" /> */}
          {list.img2 && (
            <img className="medal" src={list.img2} alt="medal"></img>
          )}
        </div>
      ))}
    </div>
  );
}
export default TopPerforming;
