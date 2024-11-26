
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { Button } from '@mui/material'



export default function Aganda() {
  const [currentDate, setCurrentDate] = useState(new Date())
  
  // Sample events - in a real app these would come from props or an API
  const events = [
    { id: 1, title: "Tech Innovators Conference", start: new Date(2024, 0, 1, 10, 30), end: new Date(2024, 0, 1, 11, 30) },
    { id: 2, title: "Tech Innovators Conference", start: new Date(2024, 0, 1, 10, 30), end: new Date(2024, 0, 1, 11, 30) },
    { id: 3, title: "Tech Innovators Conference", start: new Date(2024, 0, 1, 10, 30), end: new Date(2024, 0, 1, 11, 30) },
    { id: 4, title: "Tech Innovators Conference", start: new Date(2024, 0, 1, 10, 30), end: new Date(2024, 0, 1, 11, 30) },
  ]

  const formatTime = (date) => {
    return date.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'numeric' })
  }

  const navigateDate = (direction) => {
    const newDate = new Date(currentDate)
    newDate.setDate(currentDate.getDate() + (direction === 'next' ? 1 : -1))
    setCurrentDate(newDate)
  }

  return (
    <div className="flex flex-col h-full max-w-3xl mx-auto bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex space-x-4">
          <Button variant="outline" size="sm">Mese</Button>
          <Button variant="outline" size="sm">Settimana</Button>
          <Button variant="outline" size="sm">Giorno</Button>
          <Button variant="outline" size="sm">Agenda</Button>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => navigateDate('prev')}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium">Oggi</span>
          <Button variant="ghost" size="icon" onClick={() => navigateDate('next')}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Oggi
        </Button>
      </div>

      {/* Agenda View */}
      <ScrollArea className="flex-1">
        <div className="p-4">
          <div className="mb-4">
            <h2 className="text-lg font-semibold capitalize">{formatDate(currentDate)}</h2>
          </div>
          
          <div className="space-y-3">
            {events.map((event) => (
              <div key={event.id} className="flex items-start space-x-3 p-2 hover:bg-muted/50 rounded-lg transition-colors">
                <div className="text-sm text-muted-foreground w-24">
                  {formatTime(event.start)} - {formatTime(event.end)}
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm font-medium">{event.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}