import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import mavatar from '../../public/mavatar.svg'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/Card'
import { Separator } from '../components/ui/Separator'
import { Link } from 'react-router-dom'
import Avatar from '../components/Avatar'

const Sidebar = () => {
  return (
    <>
      <Card className="flex md:flex-col md:items-center  md:max-w-xs rounded-2xl sticky flex-1 p-7 md:self-start">
        <CardHeader className="space-y-6">
          <Avatar
            name="Kamil Mróz"
            width={100}
            height={100}
            src={mavatar}
          />
          <CardTitle className="font-medium tracking-wide text-2xl leading-none">
            Kamil Mróz
          </CardTitle>
          <Badge className="py-1 flex justify-center rounded-md bg-border text-primary font-light self-center px-3 tracking-wide">
            Programmer
          </Badge>
        </CardHeader>
        <Separator />
        <CardContent className="space-y-8 py-10">
          <div className="flex items-center">
            <Mail className="w-9 h-9 rounded-md text-secondary-foreground p-2 border border-border" />
            <div className="ml-4 space-y-1">
              <p className="text-xs font-medium leading-none text-muted-foreground">
                EMAIL
              </p>
              <p className="text-sm">sample@example.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <Phone className="w-9 h-9 rounded-md text-secondary-foreground p-2 border border-border" />
            <div className="ml-4 space-y-1">
              <p className="text-xs font-medium leading-none text-muted-foreground">
                PHONE
              </p>
              <p className="text-sm">+(001) 123 456 7890</p>
            </div>
          </div>
          <div className="flex items-center">
            <MapPin className="w-9 h-9 rounded-md text-secondary-foreground p-2 border border-border" />
            <div className="ml-4 space-y-1">
              <p className="text-xs font-medium leading-none text-muted-foreground">
                LOCATION
              </p>
              <p className="text-sm">Warsaw, Poland</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2">
            <Link to="/">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link to="/">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link to="/">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </CardFooter>
      </Card>
    </>
  )
}
export default Sidebar
