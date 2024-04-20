import Image from "next/image"
import Link from "next/link"
import { TooltipProvider } from "@/components/ui/tooltip"
import {
  File,
  Flag,
  Forward,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  SendHorizonal,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react"

import { Badge,badgeVariants} from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ProfileAvatar } from "@/components/ui/profileAvatar"
import { ModeToggle } from "@/components/ui/toggleMode"

export default function Dashboard() {

  const projects = [
    {
      id: 1,
      image: "",
      name: "Defensa Penal en Caso de Fraude Fiscal",
      status: "active",
      description: "alsfnalfjafsjalksfalkjfas",
      labels: ["health", "systems"],
      totalParticipants: 100,
      createdAt: "2023-10-18 03:21 PM"
    },
    {
      id: 2,
      image: "",
      name: "Machine Learning Chatbot",
      status: "cancelled",
      description: "Develop a chatbot using machine learning techniques with people from all over the world to be part of a massive consumption organization while we have a great time at the same time.",
      labels: ["machine learning", "chatbot"],
      totalParticipants: 50,
      createdAt: "2023-09-15 10:00 AM"
    },
    {
      id: 3,
      image: "",
      name: "Web Development Bootcamp",
      status: "cancelled",
      description: "Learn web development from scratch in this intensive bootcamp.",
      labels: ["web development", "bootcamp"],
      totalParticipants: 75,
      createdAt: "2023-08-05 02:30 PM"
    },
    {
      id: 4,
      image: "",
      name: "Data Analysis Project",
      status: "act  ive",
      description: "Analyze large datasets and derive insights using Python.",
      labels: ["data analysis", "python"],
      totalParticipants: 40,
      createdAt: "2023-07-20 09:45 AM"
    },
    {
      id: 5,
      image: "",
      name: "Mobile App Development",
      status: "cancelled",
      description: "Build a cross-platform mobile app for iOS and Android.",
      labels: ["mobile app", "react native"],
      totalParticipants: 60,
      createdAt: "2023-06-10 11:15 AM"
    },
    {
      id: 6,
      image: "",
      name: "Game Development Workshop",
      status: "active",
      description: "Create a simple 2D game using Unity game engine.",
      labels: ["game development", "unity"],
      totalParticipants: 30,
      createdAt: "2023-05-02 03:00 PM"
    },
    {
      id: 7,
      image: "",
      name: "Cybersecurity Training Program",
      status: "active",
      description: "Learn cybersecurity fundamentals and best practices.",
      labels: ["cybersecurity", "training"],
      totalParticipants: 80,
      createdAt: "2023-04-12 08:30 AM"
    },
    {
      id: 8,
      image: "",
      name: "Blockchain Development Project",
      status: "active",
      description: "Develop decentralized applications (DApps) using blockchain technology.",
      labels: ["blockchain", "dapps"],
      totalParticipants: 55,
      createdAt: "2023-03-01 01:45 PM"
    },
    {
      id: 9,
      image: "",
      name: "Full Stack Web Development Course",
      status: "cancelled",
      description: "Master both front-end and back-end web development.",
      labels: ["full stack", "web development"],
      totalParticipants: 90,
      createdAt: "2023-02-09 05:20 PM"
    },
    {
      id: 10,
      image: "",
      name: "Artificial Intelligence Research Project",
      status: "active",
      description: "Conduct research on cutting-edge AI technologies.",
      labels: ["artificial intelligence", "research"],
      totalParticipants: 70,
      createdAt: "2023-01-15 12:10 PM"
    }
  ];
  
  
  
  
  return (
    <TooltipProvider> 
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Orders</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Orders</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Package className="h-5 w-5" />
                <span className="sr-only">Products</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Products</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Users2 className="h-5 w-5" />
                <span className="sr-only">Customers</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Customers</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <LineChart className="h-5 w-5" />
                <span className="sr-only">Analytics</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Analytics</TooltipContent>
          </Tooltip>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                  <ProfileAvatar/>
                </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Profile</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Users2 className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <div className="relative ml-auto flex-1 md:grow-0">
          
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
        <ModeToggle/>
        </header>
        <div className="flex min-h-screen right w-11/12 ml-8 flex-col bg-muted/40">
              <Card x-chunk="dashboard-06-chunk-0">
        <main className="grid  flex-1 mt-7 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Table>
            <TableBody>
                    {projects.map((project) => (
                      <TableRow key={project.id} className="w-full">
                        <TableCell className="hidden sm:table-cell">
                        <Link href={`/projects/${project.id}`} aria-label={project.name}>
                        
                          <Image
                            src={project.image}
                            alt={project.name}
                            className="aspect-square rounded-md object-cover"
                            height={64}
                            width={64}
                            />
                          </Link>
                                </TableCell>

                                <TableCell className="font-medium">
                                <Link href={`/projects/${project.id}`} aria-label={project.name}> <div className="styles_noOfLines-2__k_Ta_ styles_titleTaglineItem__d5Rut">
                    <strong>{project.name}</strong> <span className="styles_subtleSep__9EA3Q">—</span> {project.description}
                  </div></Link>
                </TableCell>
                    <TableCell className="hidden sm:table-cell">< Badge className={badgeVariants({ variant: project.status })}>{project.status}</Badge></TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel style={{cursor:'pointer'}}>Actions</DropdownMenuLabel> 
                          <DropdownMenuItem style={{cursor:'pointer'}}>Collab <SendHorizonal style={{ fill:'green',width:'13px', height:'13px',marginLeft:'4px'}} /> </DropdownMenuItem>
                          <DropdownMenuItem style={{cursor:'pointer'}}>Share <Forward style={{width:'15px', height:'15px',marginLeft:'5px'}}/></DropdownMenuItem> 
                          <DropdownMenuItem style={{cursor:'pointer'}}>Report<Flag style={{fill:'red', width:'13px', height:'13px',marginLeft:'2px'}}/></DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
            
                  </TableRow>
                ))}
              </TableBody>
            </Table>

                    
            </main>
            </Card>
                  
          </div>
          </div>
        </div>
    </TooltipProvider>
  )
}
