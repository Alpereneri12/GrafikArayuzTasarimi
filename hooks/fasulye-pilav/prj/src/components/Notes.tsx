import React, { useState,useEffect } from 'react';
import { Button } from '@/components/ui/button'; //shadcn/ui kullanıyorsanız
import { Input } from '@/components/ui/input';  //shadcn/ui kullanıyorsanız
import { Textarea } from '@/components/ui/textarea'; //shadcn/ui kullanıyorsanız
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'; //shadcn/ui kullanıyorsanız
import { Trash2 } from 'lucide-react'; //shadcn/ui kullanıyorsanız

interface Note {
    id: string;
    title: string;
    content: string;
}

const Notes: React.FC = () => {
    const [notes, setNotes] = useState<Note[]>(() => {
        if (typeof window !== 'undefined') {
          const savedNotes = localStorage.getItem('notes');
          return savedNotes ? JSON.parse(savedNotes) : [];
        }
        return [];
      });
    const [newNoteTitle, setNewNoteTitle] = useState('');
    const [newNoteContent, setNewNoteContent] = useState('');

     // Notlar değiştiğinde localStorage'ı güncelle
    useEffect(() => {
        if (typeof window !== 'undefined'){
            localStorage.setItem('notes', JSON.stringify(notes));
        }
    }, [notes]);

    const handleAddNote = () => {
        if (newNoteTitle.trim() || newNoteContent.trim()) { // Başlık veya içerik boş değilse
            const newNote: Note = {
                id: crypto.randomUUID(),
                title: newNoteTitle,
                content: newNoteContent,
            };
            setNotes([...notes, newNote]);
            setNewNoteTitle('');
            setNewNoteContent('');
        }
    };

    const handleDeleteNote = (id: string) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Notlar</h1>

            <div className="mb-4 space-y-4">
                <Input
                    placeholder="Not Başlığı"
                    value={newNoteTitle}
                    onChange={(e) => setNewNoteTitle(e.target.value)}
                    className="w-full"
                />
                <Textarea
                    placeholder="Not İçeriği"
                    value={newNoteContent}
                    onChange={(e) => setNewNoteContent(e.target.value)}
                    className="w-full"
                    rows={4}
                />
                <Button onClick={handleAddNote} className="w-full">Not Ekle</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {notes.map((note) => (
                  <Card key={note.id} className="bg-card border border-border shadow-md">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold">{note.title}</CardTitle>
                        <CardDescription>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteNote(note.id)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground whitespace-pre-line">{note.content}</p>
                    </CardContent>
                </Card>
                ))}
            </div>
             {notes.length === 0 && (
                <div className="text-center text-gray-500 mt-4">Henüz not yok.</div>
            )}
        </div>
    );
};

export default Notes;
