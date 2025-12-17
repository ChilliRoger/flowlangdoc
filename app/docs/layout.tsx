import DocsSidebar from '@/components/DocsSidebar';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <DocsSidebar />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
