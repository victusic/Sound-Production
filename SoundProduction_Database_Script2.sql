USE [master]
GO
/****** Object:  Database [MusicalBase]    Script Date: 03.06.2022 0:51:50 ******/
CREATE DATABASE [MusicalBase]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'MusicalBase', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\MusicalBase.mdf' , SIZE = 139264KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'MusicalBase_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\MusicalBase_log.ldf' , SIZE = 73728KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [MusicalBase] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [MusicalBase].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [MusicalBase] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [MusicalBase] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [MusicalBase] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [MusicalBase] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [MusicalBase] SET ARITHABORT OFF 
GO
ALTER DATABASE [MusicalBase] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [MusicalBase] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [MusicalBase] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [MusicalBase] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [MusicalBase] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [MusicalBase] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [MusicalBase] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [MusicalBase] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [MusicalBase] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [MusicalBase] SET  DISABLE_BROKER 
GO
ALTER DATABASE [MusicalBase] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [MusicalBase] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [MusicalBase] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [MusicalBase] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [MusicalBase] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [MusicalBase] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [MusicalBase] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [MusicalBase] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [MusicalBase] SET  MULTI_USER 
GO
ALTER DATABASE [MusicalBase] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [MusicalBase] SET DB_CHAINING OFF 
GO
ALTER DATABASE [MusicalBase] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [MusicalBase] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [MusicalBase] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [MusicalBase] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'MusicalBase', N'ON'
GO
ALTER DATABASE [MusicalBase] SET QUERY_STORE = OFF
GO
USE [MusicalBase]
GO
/****** Object:  Table [dbo].[Advertisement]    Script Date: 03.06.2022 0:51:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Advertisement](
	[AdvertisementId] [int] IDENTITY(1,1) NOT NULL,
	[TypeAdvertisement] [int] NOT NULL,
	[Representative] [int] NOT NULL,
	[Area] [int] NULL,
	[Group] [int] NULL,
	[Moderation] [int] NOT NULL,
 CONSTRAINT [PK_Advertisement] PRIMARY KEY CLUSTERED 
(
	[AdvertisementId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Areas]    Script Date: 03.06.2022 0:51:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Areas](
	[AreaId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Representative] [int] NOT NULL,
	[Location] [nvarchar](max) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[DescriptionGroups] [nvarchar](max) NOT NULL,
	[PhotoLogo] [varbinary](max) NULL,
	[Photo1] [varbinary](max) NULL,
	[Photo2] [varbinary](max) NULL,
	[Photo3] [varbinary](max) NULL,
	[Photo4] [varbinary](max) NULL,
	[Photo5] [varbinary](max) NULL,
	[Photo6] [varbinary](max) NULL,
	[Phone] [nchar](15) NOT NULL,
	[Mail] [nvarchar](max) NOT NULL,
	[Capacity] [int] NOT NULL,
	[Equipment] [nvarchar](max) NULL,
 CONSTRAINT [PK_Areas] PRIMARY KEY CLUSTERED 
(
	[AreaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AutorisationHistory]    Script Date: 03.06.2022 0:51:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AutorisationHistory](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[Date] [datetime] NOT NULL,
	[State] [bit] NOT NULL,
 CONSTRAINT [PK_AutorisationHistory] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Genre]    Script Date: 03.06.2022 0:51:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Genre](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Genre] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Genre] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Groups]    Script Date: 03.06.2022 0:51:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Groups](
	[BandId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Producer] [int] NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[DescriptionAreas] [nvarchar](max) NOT NULL,
	[PhotoLogo] [varbinary](max) NULL,
	[Photo1] [varbinary](max) NULL,
	[Photo2] [varbinary](max) NULL,
	[Photo3] [varbinary](max) NULL,
	[Photo4] [varbinary](max) NULL,
	[Photo5] [varbinary](max) NULL,
	[Photo6] [varbinary](max) NULL,
	[SpotifyLink] [nvarchar](max) NULL,
	[AppleMusicLink] [nvarchar](max) NULL,
	[DeezerLink] [nvarchar](max) NULL,
	[YandexMusicLink] [nvarchar](max) NULL,
	[YouTubeMusicLink] [nvarchar](max) NULL,
	[YouTubeLink] [nvarchar](max) NULL,
	[Phone] [nvarchar](15) NOT NULL,
	[Mail] [nvarchar](max) NOT NULL,
	[Genre] [int] NOT NULL,
 CONSTRAINT [PK_Groups] PRIMARY KEY CLUSTERED 
(
	[BandId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Rolls]    Script Date: 03.06.2022 0:51:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rolls](
	[RollId] [int] IDENTITY(1,1) NOT NULL,
	[Roll] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Rolls] PRIMARY KEY CLUSTERED 
(
	[RollId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TypeAdvertisement]    Script Date: 03.06.2022 0:51:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TypeAdvertisement](
	[AdvertisementId] [int] IDENTITY(1,1) NOT NULL,
	[Advertisement] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_TypeAdvertisement] PRIMARY KEY CLUSTERED 
(
	[AdvertisementId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TypeDevice]    Script Date: 03.06.2022 0:51:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TypeDevice](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Type] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_TypeDevice] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 03.06.2022 0:51:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[Roll] [int] NOT NULL,
	[Surname] [nvarchar](max) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Patronymic] [nvarchar](max) NOT NULL,
	[Mail] [nvarchar](max) NOT NULL,
	[Phone] [nchar](15) NOT NULL,
	[Login] [nvarchar](max) NOT NULL,
	[Password] [nvarchar](max) NOT NULL,
	[Logo] [image] NULL,
	[IsActivity] [int] NOT NULL,
	[CountAdvertisement] [int] NOT NULL,
	[RegistrationDate] [datetime] NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Visit]    Script Date: 03.06.2022 0:51:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Visit](
	[VisitId] [int] IDENTITY(1,1) NOT NULL,
	[Date] [date] NOT NULL,
	[Time] [time](7) NOT NULL,
	[Device] [int] NOT NULL,
	[Advertisiment] [int] NOT NULL,
 CONSTRAINT [PK_Visit] PRIMARY KEY CLUSTERED 
(
	[VisitId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Advertisement]  WITH CHECK ADD  CONSTRAINT [FK_Advertisement_Areas] FOREIGN KEY([Area])
REFERENCES [dbo].[Areas] ([AreaId])
GO
ALTER TABLE [dbo].[Advertisement] CHECK CONSTRAINT [FK_Advertisement_Areas]
GO
ALTER TABLE [dbo].[Advertisement]  WITH CHECK ADD  CONSTRAINT [FK_Advertisement_Groups] FOREIGN KEY([Group])
REFERENCES [dbo].[Groups] ([BandId])
GO
ALTER TABLE [dbo].[Advertisement] CHECK CONSTRAINT [FK_Advertisement_Groups]
GO
ALTER TABLE [dbo].[Advertisement]  WITH CHECK ADD  CONSTRAINT [FK_Advertisement_TypeAdvertisement] FOREIGN KEY([TypeAdvertisement])
REFERENCES [dbo].[TypeAdvertisement] ([AdvertisementId])
GO
ALTER TABLE [dbo].[Advertisement] CHECK CONSTRAINT [FK_Advertisement_TypeAdvertisement]
GO
ALTER TABLE [dbo].[Advertisement]  WITH CHECK ADD  CONSTRAINT [FK_Advertisement_Users] FOREIGN KEY([Representative])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[Advertisement] CHECK CONSTRAINT [FK_Advertisement_Users]
GO
ALTER TABLE [dbo].[Areas]  WITH CHECK ADD  CONSTRAINT [FK_Areas_Users] FOREIGN KEY([Representative])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[Areas] CHECK CONSTRAINT [FK_Areas_Users]
GO
ALTER TABLE [dbo].[AutorisationHistory]  WITH CHECK ADD  CONSTRAINT [FK_AutorisationHistory_Users] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[AutorisationHistory] CHECK CONSTRAINT [FK_AutorisationHistory_Users]
GO
ALTER TABLE [dbo].[Groups]  WITH CHECK ADD  CONSTRAINT [FK_Groups_Genre] FOREIGN KEY([Genre])
REFERENCES [dbo].[Genre] ([id])
GO
ALTER TABLE [dbo].[Groups] CHECK CONSTRAINT [FK_Groups_Genre]
GO
ALTER TABLE [dbo].[Groups]  WITH CHECK ADD  CONSTRAINT [FK_Groups_Users] FOREIGN KEY([Producer])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[Groups] CHECK CONSTRAINT [FK_Groups_Users]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_Rolls] FOREIGN KEY([Roll])
REFERENCES [dbo].[Rolls] ([RollId])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_Rolls]
GO
ALTER TABLE [dbo].[Visit]  WITH CHECK ADD  CONSTRAINT [FK_Visit_Advertisement] FOREIGN KEY([Advertisiment])
REFERENCES [dbo].[Advertisement] ([AdvertisementId])
GO
ALTER TABLE [dbo].[Visit] CHECK CONSTRAINT [FK_Visit_Advertisement]
GO
ALTER TABLE [dbo].[Visit]  WITH CHECK ADD  CONSTRAINT [FK_Visit_TypeDevice] FOREIGN KEY([Device])
REFERENCES [dbo].[TypeDevice] ([Id])
GO
ALTER TABLE [dbo].[Visit] CHECK CONSTRAINT [FK_Visit_TypeDevice]
GO
USE [master]
GO
ALTER DATABASE [MusicalBase] SET  READ_WRITE 
GO
