import Headline from '../components/Headline/Headline'
import BodyText from '../components/BodyText/BodyText'
import Button from '../components/Button/Button'
import { DownIcon } from '../components/Icon/icons'
import Header from '../components/Header/Header'
import LandingPageNavMenu from '../components/Header/LandingPageNavMenu'
import Image from '../components/Image/Image'
import Video from '../components/Video/Video'
import Footer from '../components/Footer/Footer'
import Table from '../components/Table/Table'
import TableHeader from '../components/Table/TableHeader'
import TableItem from '../components/Table/TableItem'

const randomImage1 = 'https://picsum.photos/536/354?random=1'
const randomImage2 = 'https://picsum.photos/536/354?random=2'
const randomImage3 = 'https://picsum.photos/536/354?random=3'
const randomImage4 = 'https://picsum.photos/536/354?random=4'
const videoLink = 'https://www.youtube.com/embed/ZPCfoCVCx3U'

function LandingPage() {
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
            <Button text="Get started" disabled={false} />
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
                { property: 'gpicon', title: 'GB Icon' },
                { property: 'blitzicon', title: 'BZ Icon' },
                { property: 'logicon', title: 'LG Icon' },
              ]}
            />
            {[
              {
                feautures: 'Display data',
                gpicon: 'check',
                blitzicon: 'check',
                logicon: 'check',
              },
              {
                feautures: 'Review players',
                gpicon: 'check',
                blitzicon: '',
                logicon: '',
              },
              {
                feautures: 'Compare to players',
                gpicon: 'check',
                blitzicon: '',
                logicon: '',
              },
              {
                feautures: 'Contact players',
                gpicon: 'check',
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
          <Button text="Try now" disabled={false} />
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default LandingPage
