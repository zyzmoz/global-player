import { useNavigate } from 'react-router-dom'
import Headline from '../components/Headline/Headline'
import BodyText from '../components/BodyText/BodyText'
import Button from '../components/Button/Button'
import { CheckIcon, DownIcon } from '../components/Icon/icons'
import Header from '../components/Header/Header'
import LandingPageNavMenu from '../components/Header/LandingPageNavMenu'
import Image from '../components/Image/Image'
import Video from '../components/Video/Video'
import Footer from '../components/Footer/Footer'
import Table from '../components/Table/Table'
import TableHeader from '../components/Table/TableHeader'
import TableItem from '../components/Table/TableItem'
import Colors from '../sass/variables/_colors.scss'

import randomImage1 from '../assets/images/box1.png'
import GB from '../assets/images/GB.png'
import BG from '../assets/images/BG.png'
import LG from '../assets/images/LG.png'
import randomImage2 from '../assets/images/box2.png'
import randomImage3 from '../assets/images/box3.png'
import randomImage4 from '../assets/images/box4.png'

const videoLink = 'https://www.youtube.com/embed/F6iniHQXxqk'

function LandingPage() {
  const navigate = useNavigate()
  return (
    <div className="landing-page">
      <LandingPageNavMenu className="nav-side-menu" />
      <div className="landing-page-container">
        <div className="header-full-size">
          <Header />
          <div className="landing-page-info">
            <Headline text="Get the data and hire the best" color="" fontSize="" textAlign="" />
            <BodyText
              text="Get the fundamentals to improve and find everything your team need to win."
              fontSize="16pt"
              textAlign=""
            />
            <Button text="Get started" disabled={false} onClick={() => navigate('/topplayers')} />
          </div>
          <div className="down-icon-container">
            <DownIcon className="icon" fill="#53BCF9" />
          </div>
        </div>

        <div className="feauture-wrapper">
          <div className="section-title">
            <Headline text="Our Feautures" color="#7DFAA4" fontSize="24pt" textAlign="center" />
          </div>
          <div className="feauture-container-left">
            <div className="image-container">
              <Image imageUrl={randomImage1} />
            </div>
            <div className="text-container">
              <Headline text="Relevant data" color="#7DFAA4" fontSize="20pt" textAlign="" />
              <BodyText
                text="Get the fundamentals to improve and find everything your team need to win."
                fontSize="16pt"
                textAlign=""
              />
            </div>
          </div>
          <div className="feauture-container-right">
            <div className="image-container">
              <Image imageUrl={randomImage2} />
            </div>
            <div className="text-container">
              <Headline text="Compare players' performance" color="#7DFAA4" fontSize="20pt" textAlign="" />
              <BodyText
                text="Get the fundamentals to improve and find everything your team need to win."
                fontSize="16pt"
                textAlign=""
              />
            </div>
          </div>
          <div className="feauture-container-left">
            <div className="image-container">
              <Image imageUrl={randomImage3} />
            </div>
            <div className="text-container">
              <Headline text="Review and endorse skills" color="#7DFAA4" fontSize="20pt" textAlign="" />
              <BodyText
                text="Get the fundamentals to improve and find everything your team need to win."
                fontSize="16pt"
                textAlign=""
              />
            </div>
          </div>
          <div className="feauture-container-right">
            <div className="image-container">
              <Image imageUrl={randomImage4} />
            </div>
            <div className="text-container">
              <Headline text="Contact pro players" color="#7DFAA4" fontSize="20pt" textAlign="" />
              <BodyText
                text="Get the fundamentals to improve and find everything your team need to win."
                fontSize="16pt"
                textAlign=""
              />
            </div>
          </div>
        </div>

        <div className="video-wrapper">
          <Video videoUrl={`${videoLink}`} />
        </div>

        <div className="table-wrapper">
          <Headline text="Why choosing us?" color="#7DFAA4" fontSize="20pt" />
          <Table className="table-competitors">
            <TableHeader
              headers={[
                { property: 'feautures', title: 'Feautures' },
                { property: 'gpicon', title: <Image imageUrl={GB} /> },
                { property: 'blitzicon', title: <Image imageUrl={BG} /> },
                { property: 'logicon', title: <Image imageUrl={LG} /> },
              ]}
            />
            {[
              {
                feautures: 'Display data',
                gpicon: <CheckIcon fill={Colors.primaryColorBrightGreen} />,
                blitzicon: <CheckIcon fill={Colors.primaryColorBrightGreen} />,
                logicon: <CheckIcon fill={Colors.primaryColorBrightGreen} />,
              },
              {
                feautures: 'Review players',
                gpicon: <CheckIcon fill={Colors.primaryColorBrightGreen} />,
                blitzicon: '',
                logicon: '',
              },
              {
                feautures: 'Compare to players',
                gpicon: <CheckIcon fill={Colors.primaryColorBrightGreen} />,
                blitzicon: '',
                logicon: '',
              },
              {
                feautures: 'Contact players',
                gpicon: <CheckIcon fill={Colors.primaryColorBrightGreen} />,
                blitzicon: '',
                logicon: '',
              },
            ].map((item) => (
              <TableItem
                item={item}
                headers={[
                  { property: 'feautures', title: 'Feautures' },
                  { property: 'gpicon', title: 'GP Icon' },
                  { property: 'blitzicon', title: 'BLITZ Icon' },
                  { property: 'logicon', title: 'LoG Icon' },
                ]}
              />
            ))}
          </Table>
          <Button text="Try now" disabled={false} onClick={() => navigate('/topplayers')} />
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default LandingPage
